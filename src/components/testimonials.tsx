import type { CSSProperties } from "react";
import { testimonials, type Testimonial } from "@/lib/data";
import { Reveal, RevealStagger } from "@/components/scroll-reveal";
import { Spotlight } from "@/components/spotlight";

function QuoteMark({ className = "text-accent/50" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 32 24"
      className={`h-6 w-8 shrink-0 ${className}`}
      fill="currentColor"
    >
      <path d="M0 24V14.4C0 6.4 4.8 1.2 12.8 0L14.4 3.2C9.6 4.8 7.2 8 7.2 12H12.8V24H0ZM17.6 24V14.4C17.6 6.4 22.4 1.2 30.4 0L32 3.2C27.2 4.8 24.8 8 24.8 12H30.4V24H17.6Z" />
    </svg>
  );
}

function Attribution({
  testimonial,
  inverted = false,
}: {
  testimonial: Testimonial;
  inverted?: boolean;
}) {
  return (
    <div className="mt-6 flex items-center gap-3">
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border font-mono text-xs ${
          inverted
            ? "border-background/30 text-background"
            : "border-accent/40 text-accent"
        }`}
      >
        {testimonial.initials}
      </span>
      <div>
        <p className="text-sm font-semibold">{testimonial.name}</p>
        <p
          className={`text-xs tracking-wide uppercase ${
            inverted ? "text-background/60" : "text-muted"
          }`}
        >
          {testimonial.role} @ {testimonial.company}
        </p>
      </div>
    </div>
  );
}

function FeaturedCard({
  testimonial,
  style,
}: {
  testimonial: Testimonial;
  style?: CSSProperties;
}) {
  return (
    <div
      style={style}
      className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-foreground p-8 text-background sm:row-span-2 sm:p-10"
    >
      <Spotlight variant="static" anchor="top-right" size={700} opacity={0.1} />
      <div className="relative z-10 flex flex-1 flex-col">
        <QuoteMark className="text-background/40" />
        <p className="mt-5 flex-1 text-lg leading-relaxed font-medium tracking-tight text-balance sm:text-xl">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <Attribution testimonial={testimonial} inverted />
      </div>
    </div>
  );
}

function Card({
  testimonial,
  style,
}: {
  testimonial: Testimonial;
  style?: CSSProperties;
}) {
  return (
    <div
      style={style}
      className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background-elevated p-6 shadow-2xl shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 sm:p-8"
    >
      <Spotlight variant="static" anchor="top-right" size={700} opacity={0.1} />
      <div className="relative z-10 flex flex-1 flex-col">
        <QuoteMark className="text-accent/70" />
        <p className="mt-5 flex-1 text-base leading-relaxed text-foreground sm:text-lg">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <Attribution testimonial={testimonial} />
      </div>
    </div>
  );
}

export function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-24 overflow-hidden border-t border-border/60 bg-background"
    >
      <Spotlight variant="static" anchor="top-center" size={820} opacity={0.08} />
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <Reveal>
          <h2 className="mb-16 text-sm font-medium tracking-widest text-muted uppercase">
            What people who worked with me say
          </h2>
        </Reveal>

        <RevealStagger y={26} stagger={0.1} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FeaturedCard testimonial={featured} />
          {rest.map((testimonial) => (
            <Card key={testimonial.name} testimonial={testimonial} />
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
