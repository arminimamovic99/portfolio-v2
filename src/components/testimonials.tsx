"use client";

import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/lib/data";
import { Reveal, prefersReducedMotion } from "@/components/scroll-reveal";
import { Spotlight } from "@/components/spotlight";

const AUTOPLAY_MS = 6500;

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function QuoteMark() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 32 24"
      className="h-7 w-9 shrink-0 text-accent/50"
      fill="currentColor"
    >
      <path d="M0 24V14.4C0 6.4 4.8 1.2 12.8 0L14.4 3.2C9.6 4.8 7.2 8 7.2 12H12.8V24H0ZM17.6 24V14.4C17.6 6.4 22.4 1.2 30.4 0L32 3.2C27.2 4.8 24.8 8 24.8 12H30.4V24H17.6Z" />
    </svg>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;
  const active = testimonials[index];

  const goTo = (i: number) => setIndex((i + total) % total);

  useEffect(() => {
    if (paused || prefersReducedMotion()) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, total]);

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-24 overflow-hidden border-t border-border/60 bg-background"
    >
      <Spotlight variant="static" anchor="top-center" size={820} opacity={0.08} />
      <div className="relative mx-auto max-w-3xl px-6 py-24 sm:py-32">
        <Reveal>
          <div className="mb-16 flex items-baseline justify-between gap-3">
            <h2 className="text-sm font-medium tracking-widest text-muted uppercase">
              What people who worked with me say
            </h2>
            <span className="font-mono text-xs whitespace-nowrap text-muted">
              {pad(index + 1)} / {pad(total)}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="rounded-2xl border border-border bg-background-elevated p-8 transition-colors duration-300 sm:p-12"
          >
            <QuoteMark />
            <div aria-live="polite">
              <p
                key={index}
                className="animate-testimonial-in mt-5 text-xl leading-relaxed font-medium tracking-tight text-balance sm:text-2xl"
              >
                {active.quote}
              </p>
              <div
                key={`${index}-attribution`}
                className="animate-testimonial-in mt-8 flex items-center gap-3"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/40 font-mono text-sm text-accent">
                  {active.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold">{active.name}</p>
                  <p className="text-xs tracking-wide text-muted uppercase">
                    {active.role} @ {active.company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous testimonial"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/60 hover:text-accent"
            >
              ←
            </button>
            <div className="flex items-center gap-1.5">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show testimonial from ${t.name}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-accent" : "w-1.5 bg-border hover:bg-muted"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next testimonial"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/60 hover:text-accent"
            >
              →
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
