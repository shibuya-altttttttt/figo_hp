import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { TextLink } from '@/components/ui/TextLink';
import { Reveal } from '@/components/ui/Reveal';

export function MessagePreview() {
  return (
    <Section id="message" tone="base" aria-labelledby="message-heading">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-center">
          <Reveal as="figure" delay={0} className="relative order-2 md:order-1">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-neutral-100">
              <Image
                src="https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?auto=format&fit=crop&w=1400&q=80"
                alt="Figoが拠点を置く東京・新橋のビル街。"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale-[0.15]"
              />
              <div className="absolute inset-0 bg-ink/10" aria-hidden="true" />
            </div>
          </Reveal>

          <Reveal delay={180} className="order-1 md:order-2">
            <p className="section-heading-en">Representative Message</p>
            <h2
              id="message-heading"
              className="mt-4 font-serif text-h2-sm md:text-h2 font-medium text-ink text-balance leading-[1.3]"
            >
              顔が見える信頼関係を、大切に。
            </h2>
            <div className="mt-8 space-y-5 text-body leading-[1.95] text-neutral-700">
              <p>
                不動産の取引には、不安や疑問がつきものです。だからこそFigoは「顔が見える信頼関係」を大切にし、お客様の課題や目標に真正面から向き合うことを使命としています。
              </p>
              <p>
                資産価値の保全・最大化を実現する「最適な選択肢」を提案することを約束します。不動産は「誰に相談するか」で、結果は大きく変わります。
              </p>
            </div>
            <div className="mt-8 flex items-center justify-between border-t border-neutral-200 pt-6">
              <p className="font-sans text-caption tracking-wider text-neutral-500">
                代表取締役 <span className="ml-2 text-ink">金 潤求</span>
              </p>
              <TextLink href="/message">代表挨拶を読む</TextLink>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
