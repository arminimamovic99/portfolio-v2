import Image from "next/image";
import Link from "next/link";
import Aurora from "@/components/aurora";
import { calendlyUrl } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <Aurora colorStops={["#ff7a45", "#ffe9d6", "#ff7a45"]} amplitude={0.8} blend={0.5} />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-8 px-6 py-32 sm:py-40 md:flex-row md:items-center md:justify-between md:gap-6">
        <div className="flex flex-col items-start md:max-w-3xl">
          <h1 className="text-3xl leading-[1.15] font-semibold tracking-tight sm:text-5xl sm:leading-[1.15] md:text-6xl md:leading-[1.1]">
            <span className="text-shine">I turn your ideas into real products.</span>
            <br />
            Design, build, launch.
            <br />
            <span className="text-shine">
              You don&rsquo;t lift a finger.
            </span>
          </h1>
          {/* <p className="mt-2 text-lg text-muted sm:text-xl">
            7+ years of building across the EU. Industry agnostic.
          </p> */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              Book a call
            </Link>
            <Link
              href="#how-i-work"
              className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/60 hover:text-accent"
            >
              How I work
            </Link>
          </div>
        </div>
        <div className="flex shrink-0 flex-col items-center gap-4">
          <div className="h-60 w-60 overflow-hidden rounded-2xl border border-border sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80">
            <Image
              src="/photo.jpg"
              alt="Armin Imamovic"
              width={480}
              height={480}
              priority
              className="h-full w-full object-cover shadow-2xl"
            />
          </div>
          <span className="rounded-full border border-border bg-background-elevated px-4 py-2 text-center text-sm text-muted">
            <span className="font-medium text-foreground">
              Armin Imamović
            </span>{" "}
            — Software Development Consultant
          </span>
        </div>
      </div>
    </section>
  );
}
