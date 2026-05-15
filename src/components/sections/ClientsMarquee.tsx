import Image from "next/image";
import { clients } from "@/content/clients";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function ClientsMarquee() {
  // Triple to ensure seamless loop on wide screens
  const loop = [...clients, ...clients];

  return (
    <section
      id="trusted"

      aria-labelledby="trusted-h"
      className="border-y border-line/40 py-16 md:py-20"
    >
      <Eyebrow id="trusted-h" className="text-center">
        Ils nous font confiance
      </Eyebrow>

      {/* Desktop marquee */}
      <div className="mt-10 hidden overflow-hidden mask-fade-x lg:block">
        <ul className="flex w-max items-center gap-16 will-change-transform animate-[marquee_60s_linear_infinite] hover:[animation-play-state:paused]">
          {loop.map((c, i) => (
            <li
              key={`${c.name}-${i}`}
              className="flex h-12 w-[180px] shrink-0 items-center justify-center"
              aria-hidden={i >= clients.length}
            >
              <Image
                src={c.src}
                alt={c.alt}
                width={180}
                height={48}
                sizes="180px"
                style={{ width: "auto", height: "48px" }}
                className="object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile static grid */}
      <ul className="mx-auto mt-10 grid max-w-md grid-cols-3 items-center justify-items-center gap-x-6 gap-y-10 px-6 lg:hidden">
        {clients.map((c) => (
          <li key={c.name} className="flex h-9 w-full items-center justify-center">
            <Image
              src={c.src}
              alt={c.alt}
              width={120}
              height={36}
              sizes="120px"
              style={{ width: "auto", height: "36px" }}
              className="object-contain opacity-70 grayscale"
            />
          </li>
        ))}
      </ul>

      <style>{`
        @keyframes marquee {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [class*="animate-[marquee"] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
