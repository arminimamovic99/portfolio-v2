import { Spotlight } from "@/components/spotlight";
import { processSteps } from "@/lib/data";

export function HowIWork() {
  return (
    <section
      id="how-i-work"
      className="relative scroll-mt-24 overflow-hidden border-t border-border/60 bg-background"
    >
      <Spotlight variant="static" anchor="top-right" />
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <h2 className="mb-16 text-sm font-medium tracking-widest text-muted uppercase">
          How I work
        </h2>
        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
          <div
            aria-hidden
            className="absolute top-5 right-0 left-0 hidden h-px bg-border md:block"
          />
          {processSteps.map((step) => (
            <div key={step.number} className="relative flex flex-col gap-4">
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-accent/50 bg-background-elevated font-mono text-sm text-accent">
                {step.number}
              </div>
              <h3 className="text-base font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
