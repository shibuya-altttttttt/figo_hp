import Link from 'next/link';
import type { ReactNode } from 'react';

type Block =
  | { kind: 'h2'; text: string }
  | { kind: 'h3'; text: string }
  | { kind: 'paragraph'; text: string }
  | { kind: 'list'; items: string[] };

function parseBlocks(source: string): Block[] {
  const lines = source.replace(/\r\n/g, '\n').split('\n');
  const blocks: Block[] = [];
  let buffer: string[] = [];
  let listBuffer: string[] = [];

  const flushParagraph = () => {
    if (buffer.length === 0) return;
    blocks.push({ kind: 'paragraph', text: buffer.join('\n').trim() });
    buffer = [];
  };

  const flushList = () => {
    if (listBuffer.length === 0) return;
    blocks.push({ kind: 'list', items: [...listBuffer] });
    listBuffer = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();

    if (line.startsWith('## ')) {
      flushParagraph();
      flushList();
      blocks.push({ kind: 'h2', text: line.slice(3).trim() });
      continue;
    }

    if (line.startsWith('### ')) {
      flushParagraph();
      flushList();
      blocks.push({ kind: 'h3', text: line.slice(4).trim() });
      continue;
    }

    if (line.startsWith('- ')) {
      flushParagraph();
      listBuffer.push(line.slice(2).trim());
      continue;
    }

    if (line.trim() === '') {
      flushParagraph();
      flushList();
      continue;
    }

    flushList();
    buffer.push(line);
  }

  flushParagraph();
  flushList();
  return blocks;
}

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let cursor = 0;
  const pattern = /(\*\*([^*]+)\*\*)|(\[([^\]]+)\]\(([^)]+)\))/g;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > cursor) {
      nodes.push(text.slice(cursor, match.index));
    }
    if (match[1]) {
      nodes.push(
        <strong key={`b-${key++}`} className="font-medium text-ink">
          {match[2]}
        </strong>,
      );
    } else if (match[3]) {
      const href = match[5];
      const label = match[4];
      const isInternal = href.startsWith('/');
      nodes.push(
        isInternal ? (
          <Link
            key={`a-${key++}`}
            href={href}
            className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
          >
            {label}
          </Link>
        ) : (
          <a
            key={`a-${key++}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
          >
            {label}
          </a>
        ),
      );
    }
    cursor = match.index + match[0].length;
  }
  if (cursor < text.length) {
    nodes.push(text.slice(cursor));
  }
  return nodes;
}

type MarkdownTextProps = {
  source: string;
};

export function MarkdownText({ source }: MarkdownTextProps) {
  const blocks = parseBlocks(source);

  return (
    <div className="space-y-7 text-body md:text-body-lg leading-[1.95] text-neutral-700">
      {blocks.map((block, index) => {
        if (block.kind === 'h2') {
          return (
            <h2
              key={index}
              className="mt-12 border-t border-neutral-200 pt-10 font-serif text-h3-sm md:text-h3 font-medium text-ink"
            >
              {block.text}
            </h2>
          );
        }
        if (block.kind === 'h3') {
          return (
            <h3
              key={index}
              className="mt-8 font-serif text-h4 font-medium text-ink"
            >
              {block.text}
            </h3>
          );
        }
        if (block.kind === 'list') {
          return (
            <ul key={index} className="space-y-3 border-l border-accent/30 pl-6">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex} className="leading-[1.9]">
                  {renderInline(item)}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={index} className="leading-[1.95]">
            {renderInline(block.text)}
          </p>
        );
      })}
    </div>
  );
}
