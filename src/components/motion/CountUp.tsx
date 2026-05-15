"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  /** Final value as displayed (e.g. "−12°C", "99%", "+45"). The number inside
   *  will be animated from 0 (or the negative-equivalent) to its final value
   *  while the surrounding characters (sign, °C, %) remain static. */
  value: string;
  /** Animation duration in milliseconds. */
  duration?: number;
  className?: string;
  /** Optional element to render as. Defaults to span. */
  as?: "span" | "div";
};

/**
 * Scroll-triggered count-up. Parses the first number found in `value` and
 * animates it from 0 to its target. Handles negative values (e.g. "−12°C")
 * and percentages ("40%"). Respects prefers-reduced-motion.
 */
export function CountUp({
  value,
  duration = 1200,
  className,
  as = "span",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [display, setDisplay] = useState<ReactNode>(value);
  const hasRunRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasRunRef.current) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(value);
      return;
    }

    // Parse: capture leading sign chars, the number, and trailing chars
    const m = value.match(/^([^\d-−]*)(-?−?\s*\d+(?:[.,]\d+)?)(.*)$/);
    if (!m) {
      setDisplay(value);
      return;
    }
    const prefix = m[1];
    const numStr = m[2].replace(/[\s−]/g, "").replace(",", ".");
    const target = parseFloat(numStr);
    const isNegative = /[-−]/.test(m[2]);
    const suffix = m[3];

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && !hasRunRef.current) {
          hasRunRef.current = true;
          observer.disconnect();

          const start = performance.now();
          const absTarget = Math.abs(target);
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            // ease-out-expo
            const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
            const cur = absTarget * eased;
            const rounded = Number.isInteger(target)
              ? Math.round(cur)
              : cur.toFixed(1);
            setDisplay(`${prefix}${isNegative ? "−" : ""}${rounded}${suffix}`);
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    // Initial display starts at zero so we don't see the final value before scroll
    setDisplay(`${prefix}${isNegative ? "−" : ""}0${suffix}`);

    return () => observer.disconnect();
  }, [value, duration]);

  const Tag = as as keyof React.JSX.IntrinsicElements;
  return (
    // @ts-expect-error dynamic intrinsic tag
    <Tag ref={ref} className={cn(className)}>
      {display}
    </Tag>
  );
}
