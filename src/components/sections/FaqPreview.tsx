import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { Accordion, type AccordionItem } from '@/components/ui/Accordion';
import { TextLink } from '@/components/ui/TextLink';

const faqs: AccordionItem[] = [
  {
    question: '相談は有料ですか？まだ何も決まっていない段階でも大丈夫ですか？',
    answer:
      '初回のご相談は無料です。現状のヒアリングと、今後の進め方のご提案までを無料の範囲で対応しています。「まず話を聞いてほしい」「何から始めたらいいか分からない」という段階で構いません。',
  },
  {
    question: '遠方にある実家や収益物件についても相談できますか？',
    answer:
      '可能です。東京以外の地域にある物件についても、オンライン面談と現地調査を組み合わせて対応しています。必要に応じて、現地の士業・工務店ネットワークとも連携します。',
  },
  {
    question: '相続が発生してから相談するのでは遅いですか？',
    answer:
      '発生後でも可能な対応は多くあります。ただし、選択肢の広さと手続きの柔軟性という意味では、発生前からご相談いただけると取れる手段が増えます。どちらのタイミングでもお気軽にご連絡ください。',
  },
  {
    question: '税理士や弁護士との連携はどうなりますか？',
    answer:
      '顧問士業がいらっしゃる場合はその方々と連携します。不在の場合は、Figoが信頼する提携先の税理士・司法書士・弁護士をご紹介することも可能です。ワンストップで進められる体制を整えています。',
  },
  {
    question: '相談内容が家族や第三者に漏れることはありませんか？',
    answer:
      'お預かりした情報は秘密保持を徹底して管理します。ご家族のどなたにいつどこまで共有するかは、オーナー様のご意向を確認しながら進めますのでご安心ください。',
  },
];

export function FaqPreview() {
  return (
    <Section id="faq" tone="neutral" aria-labelledby="faq-heading">
      <Container>
        <SectionHeading
          id="faq-heading"
          eyebrow="FAQ"
          title="よくいただくご質問"
          lead="お問い合わせ前に参考にしていただける、代表的なご質問をまとめました。"
          align="center"
        />

        <div className="mx-auto mt-12 max-w-3xl md:mt-16">
          <Accordion items={faqs} />
          <div className="mt-10 text-center">
            <TextLink href="/faq">よくあるご質問をすべて見る</TextLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
