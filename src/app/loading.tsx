import Image from 'next/image';

export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="読み込み中"
      className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-ink"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(232,114,31,0.18), transparent 60%), linear-gradient(180deg, #141414 0%, #1A1A1A 50%, #221E1B 100%)',
        }}
        aria-hidden="true"
      />

      <div className="flex flex-col items-center gap-10">
        <div className="relative h-12 w-auto opacity-95 animate-pulse-soft">
          <Image
            src="/images/figo-logo.png"
            alt="Figo"
            width={160}
            height={52}
            priority
            className="h-12 w-auto brightness-0 invert"
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="relative h-px w-44 overflow-hidden rounded-full bg-white/10">
            <div
              className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-accent"
              style={{
                animation:
                  'loadingBar 1.4s cubic-bezier(0.45,0.05,0.55,0.95) infinite',
              }}
            />
          </div>
          <p className="font-sans text-caption uppercase tracking-[0.4em] text-white/55">
            Loading
          </p>
        </div>
      </div>

      <style>{`
        @keyframes loadingBar {
          0% { transform: translateX(-110%); }
          55% { transform: translateX(220%); }
          100% { transform: translateX(220%); }
        }
      `}</style>
    </div>
  );
}
