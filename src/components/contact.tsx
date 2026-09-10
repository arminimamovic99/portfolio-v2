import Link from "next/link";
import { Spotlight } from "@/components/spotlight";
import { calendlyUrl, email } from "@/lib/data";

export function Contact() {
  return (
    <section className="relative overflow-hidden border-t border-border/60 bg-background">
      <Spotlight />
      <div className="relative mx-auto flex max-w-3xl flex-col items-start px-6 py-24 sm:py-32">
        <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Need help building something cool?
          <br />
          Let&rsquo;s talk.
        </h2>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Link
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.03]"
          >
            Book a call
          </Link>
          <Link
            href={`mailto:${email}`}
            className="text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            {email}
          </Link>
        </div>
      </div>
      <div className="relative mx-auto max-w-3xl px-6 pb-10">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Armin Imamovic
        </p>
      </div>
    </section>
  );
}
