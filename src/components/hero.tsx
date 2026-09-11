'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import Aurora from "@/components/aurora";
import { calendlyUrl, githubUrl, linkedinUrl } from "@/lib/data";
import { prefersReducedMotion } from "@/components/scroll-reveal";
import LightRays from "./LightRays";
import DotField from "./DotField";
import DotGrid from "./DotGrid";
import ShapeGrid from "./ShapeGrid";

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const photoColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out", duration: 0.9 } })
        .to(headingRef.current, { opacity: 1, y: 0 })
        .to(ctaRef.current, { opacity: 1, y: 0 }, "-=0.55")
        .to(photoColRef.current, { opacity: 1, y: 0, scale: 1 }, "-=0.7");
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <Aurora colorStops={["#ff7a45", "#ffe9d6", "#4C2414"]} amplitude={1.2} blend={0.8} />
        {/* <LightRays raysColor="#ff7a45" lightSpread={5.2} fadeDistance={1.3}></LightRays> */}
        {/* <DotField glowColor="#ff7a45" gradientFrom="#ff7a45" gradientTo="#1b0f08" waveAmplitude={3}></DotField> */}
        {/* <DotGrid baseColor="#4C2414" activeColor="#ff7a45"/> */}
        {/* <ShapeGrid speed="0.2" direction="diagonal" borderColor="#4C2414" hoverFillColor="#4C2414"/> */}
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-8 px-6 py-32 sm:py-40 md:flex-row md:items-center md:justify-between md:gap-6">
        <div className="flex flex-col items-start md:max-w-3xl">
          <h1
            ref={headingRef}
            style={{ opacity: 0, transform: "translateY(28px)" }}
            className="text-3xl leading-[1.15] font-semibold tracking-tight sm:text-5xl sm:leading-[1.15] md:text-6xl md:leading-[1.1]"
          >
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
          <div
            ref={ctaRef}
            style={{ opacity: 0, transform: "translateY(20px)" }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
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
        <div
          ref={photoColRef}
          style={{ opacity: 0, transform: "translateY(20px) scale(0.96)" }}
          className="flex shrink-0 flex-col items-center gap-4"
        >
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
          <div className="flex w-full items-center justify-end px-6">
            <Link
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:text-accent"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.064 2.064 0 1 1 0-4.129 2.064 2.064 0 0 1 0 4.129zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:text-accent"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 6.008 0c2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.604-.014 2.896-.014 3.286 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
