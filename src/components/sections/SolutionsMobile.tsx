"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { expertises } from "@/content/expertises";

import "swiper/css";
import "swiper/css/pagination";

export function SolutionsMobile() {
  return (
    <Container className="text-white">
      <Eyebrow tone="white">Nos solutions</Eyebrow>
      <h2
        className="mt-6 text-white"
        style={{
          fontSize: "clamp(2rem, 8vw, 3rem)",
          fontWeight: 600,
          letterSpacing: "-0.03em",
          lineHeight: 1,
        }}
      >
        Quatre savoir-faire. Une seule promesse.
      </h2>

      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={20}
        slidesPerView={1.05}
        pagination={{ clickable: true }}
        className="mt-10 [&_.swiper-pagination-bullet]:!bg-white/30 [&_.swiper-pagination-bullet-active]:!bg-azur"
      >
        {expertises.map((s) => (
          <SwiperSlide key={s.slug}>
            <article className="flex flex-col">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-graphite-warm">
                <Image
                  src={s.image.src}
                  alt={s.image.alt}
                  fill
                  sizes="100vw"
                  className="object-cover photo-treatment"
                />
                <span className="absolute left-3 top-3 inline-block rounded-md bg-bg/95 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink">
                  {s.index} · {s.title}
                </span>
              </div>
              <div className="pb-12 pt-6">
                <h3
                  className="text-white"
                  style={{
                    fontSize: "1.875rem",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.05,
                  }}
                >
                  {s.title}.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/70">{s.short}</p>
                <Link
                  href={`/expertises/${s.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white underline-grow"
                >
                  Lire l&apos;expertise <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
