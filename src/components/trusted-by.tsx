import Image from "next/image";
import { companies } from "@/lib/data";
import { RevealStagger } from "@/components/scroll-reveal";

export function TrustedBy() {
  return (
    <section className="border-y border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <p className="mb-6 text-xs font-medium tracking-widest text-muted uppercase">
          Trusted by
        </p>
        <RevealStagger
          as="ul"
          className="flex flex-wrap items-center gap-x-10 gap-y-6"
        >
          {companies.map((company) => (
            <li
              key={company.name}
              className={`flex h-8 items-center transition-all duration-300 opacity-60 hover:opacity-100 hover:grayscale-0 `}
            >
              {company.logo ? (
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={company.logoWidth ?? 280}
                  height={company.logoHeight ?? 140}
                  className="object-contain"
                />
              ) : (
                <span className="text-lg font-semibold tracking-tight text-foreground">
                  {company.name}
                </span>
              )}
            </li>
          ))}
          <li className="flex h-8 items-center text-sm text-muted">
            + many more
          </li>
        </RevealStagger>
      </div>
    </section>
  );
}
