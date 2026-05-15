"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/utils";

export function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  // Default muted = true so browsers allow autoplay on intersection.
  const [muted, setMuted] = useState(true);
  const [started, setStarted] = useState(false);

  // Auto-play when the player becomes ≥50% visible. Always muted on first
  // auto-start (browser policy). User keeps control via the buttons below.
  useEffect(() => {
    const v = ref.current;
    const section = sectionRef.current;
    if (!v || !section) return;

    let triggered = false;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!triggered && e.isIntersecting && e.intersectionRatio >= 0.5) {
            triggered = true;
            v.muted = true;
            setMuted(true);
            v.play().then(() => {
              setStarted(true);
              setPlaying(true);
            }).catch(() => {
              // Autoplay blocked. user will need to click Play manually.
            });
            io.disconnect();
          }
        }
      },
      { threshold: [0, 0.5, 1] }
    );
    io.observe(section);
    return () => io.disconnect();
  }, []);

  const togglePlay = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPlaying(true);
      setStarted(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };
  const toggleMute = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };
  const fullscreen = () => {
    const v = ref.current;
    if (!v) return;
    if (document.fullscreenElement) void document.exitFullscreen();
    else void v.requestFullscreen();
  };

  return (
    <section
      ref={sectionRef}
      id="video"
      aria-labelledby="video-h"
      className="bg-bg py-[clamp(120px,18vw,200px)]"
    >
      <Container>
        <div className="text-center">
          <Eyebrow>Le projet en 30 secondes</Eyebrow>
          <h2
            id="video-h"
            className="mt-6 text-ink"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            Azur Cover en 1 vidéo.
          </h2>
        </div>

        <div className="relative mx-auto mt-16 max-w-[1100px]">
          <div className="relative aspect-video w-full overflow-hidden rounded-md border border-line/60 bg-graphite shadow-2xl">
            <video
              ref={ref}
              poster="/video/azur-cover-poster.jpg"
              preload="metadata"
              playsInline
              muted={muted}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              className="h-full w-full object-cover"
            >
              <source
                src="/video/azur-cover-presentation-720p.mp4"
                type="video/mp4"
                media="(max-width: 768px)"
              />
              <source src="/video/azur-cover-presentation.mp4" type="video/mp4" />
            </video>

            {/* Big overlay : play before first start, otherwise click-to-toggle */}
            <button
              type="button"
              onClick={togglePlay}
              aria-label={playing ? "Mettre en pause" : "Lire la vidéo"}
              className={cn(
                "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
                started ? "opacity-0 hover:opacity-100" : "opacity-100"
              )}
            >
              <span
                className="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 text-ink shadow-2xl transition-transform duration-300 hover:scale-105 md:h-24 md:w-24"
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              >
                {playing ? (
                  <Pause
                    className="h-7 w-7 fill-current md:h-9 md:w-9"
                    aria-hidden
                  />
                ) : (
                  <Play
                    className="h-7 w-7 translate-x-0.5 fill-current md:h-9 md:w-9"
                    aria-hidden
                  />
                )}
              </span>
            </button>
          </div>

          {/* Controls below the player so they never overlap the logos baked
              into the video poster / footage. All buttons are 40×40 with the
              same icon size to avoid any visual jump between play/pause. */}
          <div className="mt-4 flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={playing ? "Mettre en pause" : "Lire"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line/60 bg-bg text-ink transition hover:bg-ink hover:text-white hover:border-ink"
            >
              {playing ? (
                <Pause className="h-4 w-4 fill-current" aria-hidden />
              ) : (
                <Play className="h-4 w-4 translate-x-0.5 fill-current" aria-hidden />
              )}
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleMute}
                aria-label={muted ? "Activer le son" : "Couper le son"}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line/60 bg-bg text-ink transition hover:bg-ink hover:text-white hover:border-ink"
              >
                {muted ? (
                  <VolumeX className="h-4 w-4" aria-hidden />
                ) : (
                  <Volume2 className="h-4 w-4" aria-hidden />
                )}
              </button>
              <button
                type="button"
                onClick={fullscreen}
                aria-label="Plein écran"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line/60 bg-bg text-ink transition hover:bg-ink hover:text-white hover:border-ink"
              >
                <Maximize className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
