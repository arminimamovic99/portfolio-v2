import Link from "next/link";
import { calendlyUrl, navLinks } from "@/lib/data";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-6">
      <div className="flex items-center gap-4 overflow-hidden rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(16,16,19,0.55)] py-2.5 pr-2.5 pl-5 shadow-[0_8px_30px_rgba(0,0,0,0.3)] [-webkit-backdrop-filter:blur(24px)] [backdrop-filter:blur(24px)] sm:gap-8 sm:pr-3 sm:pl-6">
        <Link
          href="#"
          className="text-lg font-medium tracking-tight text-foreground"
        >
          A.I.
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
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
          className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.03]"
        >
          Book a call
        </Link>
      </div>
    </header>
  );
}
