import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

/**
 * Default loading skeleton applied to every route segment that doesn't define
 * its own. Sober — a thin pulsing skeleton that matches the page hero rhythm.
 */
export default function Loading() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="pt-40 pb-20 md:pt-48 md:pb-28">
          <Container>
            <div className="max-w-[880px] animate-pulse">
              <div className="h-3 w-32 bg-line/80" />
              <div className="mt-8 h-14 w-full max-w-[640px] bg-line/80" />
              <div className="mt-3 h-14 w-5/6 max-w-[540px] bg-line/80" />
              <div className="mt-10 h-4 w-full max-w-[520px] bg-line/60" />
              <div className="mt-2 h-4 w-4/5 max-w-[460px] bg-line/60" />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
