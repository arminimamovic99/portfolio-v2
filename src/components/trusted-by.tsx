import Image from "next/image";
import { companies } from "@/lib/data";

export function TrustedBy() {
  return (
    <section className="border-y border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <p className="mb-6 text-xs font-medium tracking-widest text-muted uppercase">
          Trusted by
        </p>
        <ul className="flex flex-wrap items-center gap-x-10 gap-y-6">
          {companies.map((company) => (
            <li
              key={company.name}
              className={`flex h-8 items-center transition-all duration-300 hover:opacity-100 hover:grayscale-0 ${
                company.name === "Sandvik" ? "" : "opacity-60"
              }`}
            >
              {company.logo ? (
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={company.logoWidth ?? 280}
                  height={company.logoHeight ?? 140}
                  className="h-full w-auto object-contain"
                />
              ) : (
                <span className="text-lg font-semibold tracking-tight text-foreground">
                  {company.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
