import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
};

export function PageHero({ eyebrow, title, lead }: Props) {
  return (
    <section
      className="page-hero pt-40 pb-20 md:pt-48 md:pb-28"
      aria-labelledby="page-hero-title"
    >
      <Container>
        <div className="max-w-[880px]">
          {eyebrow && (
            <span
              className="page-hero__eyebrow block opacity-0 motion-safe:[animation:hero-in_700ms_cubic-bezier(0.16,1,0.3,1)_60ms_forwards]"
            >
              <Eyebrow>{eyebrow}</Eyebrow>
            </span>
          )}
          <h1
            id="page-hero-title"
            className="page-hero__title mt-6 text-ink opacity-0 motion-safe:[animation:hero-in_700ms_cubic-bezier(0.16,1,0.3,1)_180ms_forwards]"
            style={{
              fontSize: "clamp(2.75rem, 6vw, 6rem)",
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 0.98,
            }}
          >
            {title}
          </h1>
          {lead && (
            <p
              className="page-hero__lead mt-8 max-w-[640px] text-muted opacity-0 motion-safe:[animation:hero-in_700ms_cubic-bezier(0.16,1,0.3,1)_320ms_forwards]"
              style={{ fontSize: "clamp(1.0625rem, 1.4vw, 1.375rem)", lineHeight: 1.5 }}
            >
              {lead}
            </p>
          )}
        </div>
      </Container>

      {/* Reduced-motion users get the content visible immediately */}
      <style>{`
        @keyframes hero-in {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .page-hero__eyebrow,
          .page-hero__title,
          .page-hero__lead {
            opacity: 1 !important;
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
