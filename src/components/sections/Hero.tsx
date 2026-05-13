import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Container } from '@/components/layout/Container';

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <div className="absolute inset-0 -z-20" aria-hidden="true">
        <div className="absolute inset-0 animate-ken-burns">
          <Image
            src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=2400&q=85"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: 'center' }}
          />
        </div>
      </div>
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(110deg, rgba(10,10,10,0.92) 0%, rgba(15,15,15,0.78) 35%, rgba(20,20,20,0.38) 70%, rgba(20,20,20,0.12) 100%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-1/2"
        style={{
          background:
            'linear-gradient(to top, rgba(15,15,15,0.55), transparent)',
        }}
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="flex min-h-[680px] flex-col justify-center py-24 md:min-h-[88vh] md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 sm:gap-4 opacity-0 animate-fade-in [animation-delay:0.1s]">
              <span
                className="h-px w-8 sm:w-12 origin-left scale-x-0 bg-accent animate-line-grow [animation-delay:0.3s]"
                aria-hidden="true"
              />
              <p className="font-sans text-[0.7rem] sm:text-caption font-medium uppercase tracking-[0.25em] sm:tracking-[0.4em] text-accent">
                Figo&nbsp;·&nbsp;Tokyo Real Estate
              </p>
            </div>

            <h1 className="mt-6 sm:mt-8 font-serif text-[2.5rem] sm:text-display-sm md:text-display lg:text-[4.25rem] font-medium leading-[1.12] tracking-[-0.01em] text-white text-balance">
              <span className="block opacity-0 animate-rise-slow [animation-delay:0.4s]">
                価値を創り、
              </span>
              <span className="block opacity-0 animate-rise-slow [animation-delay:0.6s]">
                価値を守る。
              </span>
            </h1>

            <p className="mt-8 sm:mt-10 max-w-xl text-body md:text-body-lg leading-[1.9] text-white/80 opacity-0 animate-fade-in-up [animation-delay:0.85s]">
              購入・保有・売却。ライフサイクル全体で、
              お客様の不動産資産価値の最大化をサポートします。
            </p>

            <div className="mt-10 sm:mt-12 opacity-0 animate-fade-in-up [animation-delay:1.05s]">
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 border-b border-white/30 pb-2 font-sans text-body md:text-body-lg font-medium text-white transition-colors hover:border-white"
              >
                <span>サービスを見る</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          <div className="mt-14 flex items-end justify-between opacity-0 animate-fade-in [animation-delay:1.3s] md:mt-16">
            <div className="hidden flex-col gap-1 md:flex">
              <p className="font-sans text-caption uppercase tracking-[0.35em] text-white/45">
                Scroll
              </p>
              <ChevronDown
                className="h-5 w-5 text-white/55 animate-scroll-cue"
                aria-hidden="true"
              />
            </div>
            <div className="grid w-full grid-cols-1 gap-y-5 font-sans text-caption tracking-wider text-white/55 sm:grid-cols-3 sm:gap-x-8 md:w-auto md:gap-x-12">
              <div>
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-white/40">
                  Tokyo
                </p>
                <p className="mt-1 text-white/75">新橋プレイス</p>
              </div>
              <div>
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-white/40">
                  Service
                </p>
                <p className="mt-1 text-white/75">Consulting / Revitalization</p>
              </div>
              <div>
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-white/40">
                  License
                </p>
                <p className="mt-1 text-white/75">東京都知事(1) 112936号</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
