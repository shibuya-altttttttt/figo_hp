import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { TextLink } from '@/components/ui/TextLink';
import { Reveal } from '@/components/ui/Reveal';
import { team } from '@/lib/team';

export function LeadershipPreview() {
  return (
    <Section id="leadership" tone="base" aria-labelledby="leadership-preview-heading">
      <Container>
        <SectionHeading
          id="leadership-preview-heading"
          eyebrow="Leadership"
          title="役員紹介。"
          lead="代表取締役・取締役の2名が、初回相談から取引完了まで一貫して担当します。"
        />

        <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-2 md:gap-12">
          {team.map((member, index) => (
            <Reveal
              key={member.slug}
              as="article"
              delay={index * 120}
              className="flex flex-col border-t border-neutral-300 pt-8"
            >
              <p className="font-sans text-caption uppercase tracking-[0.3em] text-neutral-500">
                {member.roleEn}
              </p>
              <h3 className="mt-4 font-serif text-h3-sm md:text-h3 font-medium text-ink leading-[1.3]">
                {member.name}
              </h3>
              <p className="mt-2 font-sans text-caption tracking-[0.15em] text-neutral-500">
                {member.role}
                <span className="mx-2 text-neutral-300">/</span>
                {member.nameEn}
              </p>
              {member.lead ? (
                <p className="mt-6 text-body leading-[1.95] text-neutral-700">
                  {member.lead}
                </p>
              ) : null}
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex justify-end border-t border-neutral-200 pt-6 md:mt-20">
          <TextLink href="/about#leadership-heading">役員の詳しい経歴を見る</TextLink>
        </div>
      </Container>
    </Section>
  );
}
