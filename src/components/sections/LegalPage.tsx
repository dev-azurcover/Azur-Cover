import { PageHero } from "./PageHero";
import { Container } from "@/components/ui/Container";

type Block = { heading: string; paragraphs: string[] };

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
  blocks: Block[];
};

export function LegalPage({ eyebrow, title, lead, blocks }: Props) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} lead={lead} />
      <section className="pb-[clamp(120px,18vw,200px)]">
        <Container size="narrow">
          <div className="space-y-14">
            {blocks.map((block) => (
              <section key={block.heading}>
                <h2
                  className="text-ink"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                  }}
                >
                  {block.heading}
                </h2>
                <div
                  className="mt-4 space-y-3 text-ink"
                  style={{ fontSize: "1rem", lineHeight: 1.7 }}
                >
                  {block.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
