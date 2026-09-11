import Image from "next/image";
import { comparisons } from "@/lib/data";

export function SoloVsAgency() {
  return (
    <section
      id="why-me"
      className="scroll-mt-24 border-t border-border/60 bg-background"
    >
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
        <h2 className="mb-4 text-sm font-medium tracking-widest text-muted uppercase">
          Solo vs. agency
        </h2>
        <p className="mb-12 text-sm text-muted">
          A straight comparison, row by row.
        </p>

        <p className="mb-4 text-xs text-muted sm:hidden">
          <span className="text-accent">✓</span> working with me &nbsp;
          <span className="text-muted">✕</span> typical agency
        </p>

        <div className="overflow-hidden rounded-2xl border border-border">
          <div className="hidden grid-cols-[1fr_1.3fr_1.3fr] sm:grid">
            <div className="border-b border-border bg-background-elevated p-5" />
            <div className="flex items-center gap-2.5 border-b border-l border-border bg-background-elevated p-5">
              <Image
                src="/photo.jpg"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 rounded-full object-cover"
              />
              <span className="text-sm font-semibold text-accent">
                Working with me
              </span>
            </div>
            <div className="border-b border-l border-border bg-background-elevated p-5">
              <span className="text-sm font-semibold text-muted">
                Typical agency
              </span>
            </div>
          </div>

          {comparisons.map((row, i) => (
            <div
              key={row.label}
              className={`flex flex-col gap-3 p-6 transition-colors hover:bg-background-elevated/60 sm:grid sm:grid-cols-[1fr_1.3fr_1.3fr] sm:items-center sm:gap-0 sm:p-0 ${
                i !== comparisons.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <p className="text-sm font-semibold tracking-tight sm:p-5">
                {row.label}
              </p>
              <div className="flex items-start gap-2 sm:border-l sm:border-border sm:p-5">
                <span aria-hidden className="mt-0.5 shrink-0 text-accent">
                  ✓
                </span>
                <p className="text-sm text-foreground">{row.me}</p>
              </div>
              <div className="flex items-start gap-2 sm:border-l sm:border-border sm:p-5">
                <span aria-hidden className="mt-0.5 shrink-0 text-muted">
                  ✕
                </span>
                <p className="text-sm text-muted">{row.agency}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
