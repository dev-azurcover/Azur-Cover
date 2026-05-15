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

      className="pt-40 pb-20 md:pt-48 md:pb-28"
      aria-labelledby="page-hero-title"
    >
      <Container>
        <div className="max-w-[880px]">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1
            id="page-hero-title"
            className="mt-6 text-ink"
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
              className="mt-8 max-w-[640px] text-muted"
              style={{ fontSize: "clamp(1.0625rem, 1.4vw, 1.375rem)", lineHeight: 1.5 }}
            >
              {lead}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
