import { faqItems } from "@/lib/data";
import { Reveal, RevealStagger } from "@/components/scroll-reveal";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-border/60 bg-background">
      <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
        <Reveal>
          <h2 className="mb-16 text-sm font-medium tracking-widest text-muted uppercase">
            FAQ
          </h2>
        </Reveal>
        <RevealStagger y={16} stagger={0.06} className="flex flex-col gap-4">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-border bg-background-elevated px-6 py-5 open:border-accent/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium tracking-tight [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  aria-hidden
                  className="shrink-0 text-xl leading-none text-muted transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
