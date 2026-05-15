"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Play, Pause } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { expertises } from "@/content/expertises";
import { cn } from "@/lib/utils";
import { SolutionsMobile } from "./SolutionsMobile";

const N = expertises.length;
const AUTOPLAY_MS = 8000;
const CIRC = 113; // 2π · r=18

/**
 * Solutions carousel — radically simplified after multiple iterations
 * fighting overlap bugs in a 4-planet orbital layout.
 *
 * Now: text panel on the left, ONE big circular image on the right.
 * 4-thumbnail nav strip below picks the active expertise. Smooth
 * crossfade between transitions. Zero risk of overlap. Auto-plays
 * every 8s with a circular chrono around the play/pause button.
 */
export function SolutionsCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<SVGCircleElement>(null);

  const [active, setActive] = useState(0);
  const [manuallyPaused, setManuallyPaused] = useState(false);
  const [hoverPaused, setHoverPaused] = useState(false);
  const paused = manuallyPaused || hoverPaused;
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Autoplay + circular chrono
  useEffect(() => {
    if (!isDesktop) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const circle = progressRef.current;

    if (paused) {
      if (circle) gsap.killTweensOf(circle);
      return;
    }

    if (circle) {
      gsap.killTweensOf(circle);
      gsap.set(circle, { strokeDashoffset: CIRC });
      gsap.to(circle, {
        strokeDashoffset: 0,
        duration: AUTOPLAY_MS / 1000,
        ease: "none",
      });
    }
    const t = window.setTimeout(() => {
      setActive((i) => (i + 1) % N);
    }, AUTOPLAY_MS);
    return () => {
      window.clearTimeout(t);
      if (circle) gsap.killTweensOf(circle);
    };
  }, [active, paused, isDesktop]);

  const goTo = useCallback((i: number) => {
    setActive(((i % N) + N) % N);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!sectionRef.current?.contains(document.activeElement)) return;
      if (e.key === "ArrowRight") { e.preventDefault(); goTo(active + 1); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); goTo(active - 1); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active, goTo]);

  if (!isMounted) {
    return <section className="min-h-screen bg-[#0e0e11]" />;
  }

  const current = expertises[active];

  return (
    <section
      ref={sectionRef}
      id="solutions"
      aria-labelledby="solutions-h"
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
      onFocus={() => setHoverPaused(true)}
      onBlur={() => setHoverPaused(false)}
      className="relative isolate overflow-hidden text-white bg-[#0e0e11]"
      style={{
        background: isDesktop
          ? "radial-gradient(ellipse 70% 80% at 75% 50%, #2a2a2d 0%, #0e0e11 80%)"
          : undefined,
        minHeight: isDesktop ? "100vh" : "auto",
      }}
    >
      {/* Ambient dust */}
      {isDesktop && (
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0 opacity-50 dust" />
      )}

      {/* Desktop layout */}
      {isDesktop && (
        <Container className="relative z-10 grid h-screen min-h-[820px] grid-cols-12 items-center gap-12 py-32">
          {/* TEXT PANEL */}
          <div
            role="tabpanel"
            id={`panel-${current.slug}`}
            aria-labelledby={`tab-${current.slug}`}
            tabIndex={0}
            className="col-span-12 lg:col-span-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azur focus-visible:ring-offset-4 focus-visible:ring-offset-[#0e0e11]"
          >
            <Eyebrow tone="white" id="solutions-h">
              Nos solutions
            </Eyebrow>

            {/* Crossfade: keep height stable, fade content */}
            <div className="relative mt-8 min-h-[460px]">
              {expertises.map((s, i) => (
                <div
                  key={s.slug}
                  aria-hidden={i !== active}
                  className={cn(
                    "absolute inset-0 transition-all duration-[800ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
                    i === active
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 translate-y-3 pointer-events-none"
                  )}
                >
                  <h2
                    className="text-white"
                    style={{
                      fontSize: "clamp(2.5rem, 4.4vw, 4.5rem)",
                      fontWeight: 600,
                      letterSpacing: "-0.03em",
                      lineHeight: 0.98,
                    }}
                  >
                    {s.title}.
                  </h2>
                  <p
                    className="mt-7 max-w-[480px] text-white/70"
                    style={{ fontSize: "1.0625rem", lineHeight: 1.6 }}
                  >
                    {s.short}
                  </p>
                  <ul className="mt-7 space-y-2.5">
                    {s.bullets.slice(0, 4).map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-white/80">
                        <span aria-hidden className="mt-2 inline-block h-px w-4 shrink-0 bg-azur" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/expertises/${s.slug}`}
                    className="underline-grow mt-9 inline-flex items-center gap-2 text-sm font-medium text-white"
                  >
                    {s.cta}
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE PANEL — single big disc, crossfaded */}
          <div className="col-span-12 lg:col-span-7 flex flex-col items-center">
            <div className="relative aspect-square w-full max-w-[460px]">
              {expertises.map((s, i) => (
                <div
                  key={s.slug}
                  aria-hidden
                  className={cn(
                    "absolute inset-0 transition-all duration-[800ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
                    i === active
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-[0.96]"
                  )}
                >
                  <div
                    className={cn(
                      "relative h-full w-full overflow-hidden rounded-full transition-shadow duration-700",
                      i === active
                        ? "shadow-[0_0_120px_rgba(0,166,166,0.20)] ring-1 ring-azur/50"
                        : "ring-1 ring-white/10"
                    )}
                  >
                    <Image
                      src={s.image.src}
                      alt={s.image.alt}
                      fill
                      sizes="460px"
                      priority={i === 0}
                      className="object-cover"
                    />
                    {/* Sphere highlight for depth */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-full"
                      style={{
                        background:
                          "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 40%), radial-gradient(circle at 70% 80%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 60%)",
                        boxShadow: "inset 0 0 50px rgba(0,0,0,0.5)",
                      }}
                    />
                  </div>
                </div>
              ))}

              {/* Active label below the disc */}
              <span
                key={`label-${current.slug}`}
                className="planet-caption pointer-events-none absolute left-1/2 top-full mt-6 -translate-x-1/2 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.22em] text-white/85"
              >
                <span className="text-azur">{current.index}</span>
                <span className="mx-2 text-white/30">·</span>
                {current.title}
              </span>
            </div>
          </div>

          {/* THUMBNAIL NAV — full-width row at the bottom of the section */}
          <nav
            role="tablist"
            aria-label="Choisir une solution"
            className="col-span-12 mt-auto flex items-center justify-center gap-3"
          >
            {/* Prev button */}
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              aria-label="Solution précédente"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/60 hover:bg-white/5"
            >
              ←
            </button>

            {/* 4 thumbnails */}
            <div className="flex items-center gap-2">
              {expertises.map((s, i) => {
                const selected = i === active;
                return (
                  <button
                    key={s.slug}
                    id={`tab-${s.slug}`}
                    role="tab"
                    aria-selected={selected}
                    aria-controls={`panel-${s.slug}`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => goTo(i)}
                    className={cn(
                      "group relative flex h-14 items-center gap-3 rounded-full border bg-white/5 px-2 pr-5 text-left transition-all duration-300",
                      selected
                        ? "border-azur/60 bg-white/10"
                        : "border-white/10 hover:border-white/30 hover:bg-white/8"
                    )}
                  >
                    <div
                      className={cn(
                        "relative h-10 w-10 shrink-0 overflow-hidden rounded-full transition-all duration-500",
                        selected ? "ring-1 ring-azur" : "ring-1 ring-white/10 grayscale"
                      )}
                    >
                      <Image
                        src={s.image.src}
                        alt=""
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start leading-tight">
                      <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/45">
                        {s.index}
                      </span>
                      <span
                        className={cn(
                          "text-[13px] font-medium transition-colors duration-300",
                          selected ? "text-white" : "text-white/55 group-hover:text-white"
                        )}
                      >
                        {s.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Play/pause + next */}
            <div className="relative">
              <svg viewBox="0 0 40 40" className="h-10 w-10 -rotate-90" aria-hidden>
                <circle cx="20" cy="20" r="18" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="none" />
                <circle
                  ref={progressRef}
                  cx="20"
                  cy="20"
                  r="18"
                  stroke="var(--color-azur)"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  style={{ strokeDasharray: CIRC, strokeDashoffset: CIRC }}
                />
              </svg>
              <button
                type="button"
                onClick={() => setManuallyPaused((p) => !p)}
                aria-label={manuallyPaused ? "Reprendre l'auto-play" : "Mettre en pause"}
                className="absolute inset-0 flex items-center justify-center text-white/80 transition hover:text-white"
              >
                {manuallyPaused ? (
                  <Play className="h-3.5 w-3.5 translate-x-px fill-current" aria-hidden />
                ) : (
                  <Pause className="h-3.5 w-3.5 fill-current" aria-hidden />
                )}
              </button>
            </div>

            <button
              type="button"
              onClick={() => goTo(active + 1)}
              aria-label="Solution suivante"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/60 hover:bg-white/5"
            >
              →
            </button>
          </nav>
        </Container>
      )}

      {/* Mobile fallback */}
      {!isDesktop && (
        <div className="py-[clamp(80px,15vw,120px)]">
          <SolutionsMobile />
        </div>
      )}

      <style>{`
        .planet-caption {
          animation: caption-in 600ms cubic-bezier(0.16,1,0.3,1) both;
        }
        @keyframes caption-in {
          from { opacity: 0; transform: translate(-50%, -4px); }
          to   { opacity: 1; transform: translate(-50%, 0); }
        }
        .dust {
          background-image:
            radial-gradient(1px 1px at 12% 18%, rgba(255,255,255,0.18), transparent 60%),
            radial-gradient(1px 1px at 28% 72%, rgba(255,255,255,0.12), transparent 60%),
            radial-gradient(1.2px 1.2px at 41% 38%, rgba(0,166,166,0.20), transparent 60%),
            radial-gradient(1px 1px at 55% 88%, rgba(255,255,255,0.14), transparent 60%),
            radial-gradient(1px 1px at 64% 24%, rgba(255,255,255,0.10), transparent 60%),
            radial-gradient(1.4px 1.4px at 78% 56%, rgba(255,255,255,0.16), transparent 60%),
            radial-gradient(1px 1px at 90% 32%, rgba(0,166,166,0.16), transparent 60%);
          background-size: 100% 100%;
          animation: dust-drift 60s ease-in-out infinite alternate;
        }
        @keyframes dust-drift {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-12px, 6px, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .planet-caption, .dust { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
