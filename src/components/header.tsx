import Link from "next/link";
import { calendlyUrl, navLinks } from "@/lib/data";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b rounded-xl border-border/30 bg-background/30 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="text-xl font-medium tracking-tight text-foreground">
          A.I.
        </span>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Book a call
        </Link>
      </div>
    </header>
  );
}
