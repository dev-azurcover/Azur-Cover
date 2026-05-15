import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { pressItems } from "@/content/presse";

export const metadata: Metadata = {
  title: "Presse",
  description:
    "Toutes les actualités d'Azur Cover : presse, partenariats, reconnaissances institutionnelles.",
};

export default function PressePage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="Presse"
          title="On parle de nous."
          lead="Reconnaissances institutionnelles, partenariats, articles. Le travail d'Azur Cover dans la presse et sur le terrain politique."
        />

        <section className="pb-[clamp(120px,18vw,200px)]">
          <Container size="narrow">
            <ul className="divide-y divide-line/60 border-y border-line/60">
              {pressItems.map((item, i) => (
                <ScrollReveal as="li" key={item.title} delay={i * 80} className="py-10 md:py-12">
                  <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-8">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted md:w-40 md:shrink-0">
                      {item.date} · {item.source}
                    </div>
                    <div className="flex-1">
                      <h2
                        className="text-ink"
                        style={{
                          fontSize: "clamp(1.375rem, 2.4vw, 1.875rem)",
                          fontWeight: 600,
                          letterSpacing: "-0.02em",
                          lineHeight: 1.15,
                        }}
                      >
                        {item.title}
                      </h2>
                      <p className="mt-4 text-ink" style={{ fontSize: "1.0625rem", lineHeight: 1.6 }}>
                        {item.excerpt}
                      </p>
                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ink underline-grow"
                        >
                          Lire l&apos;article <span aria-hidden>↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </ul>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
