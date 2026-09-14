"use client";

import { useState, type CSSProperties, type KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { workItems, resumeUrl, resumePreview, type WorkItem } from "@/lib/data";
import { ProjectModal } from "@/components/project-modal";
import { Spotlight } from "@/components/spotlight";
import { Reveal, RevealStagger } from "@/components/scroll-reveal";

function CategoryBadge({ category }: { category: WorkItem["category"] }) {
  const isProduct = category === "product";
  return (
    <span
      className={`self-start rounded-full px-3 py-1 text-xs font-medium tracking-wide uppercase ${
        isProduct
          ? "border border-accent/40 text-accent"
          : "border border-border text-muted"
      }`}
    >
      {isProduct ? "My Product" : "Client Project"}
    </span>
  );
}

function CardThumbnail({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  if (total === 0) return null;

  return (
    <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-background">
      <Image
        key={images[index]}
        src={images[index]}
        alt={`${alt} screenshot ${index + 1} of ${total}`}
        fill
        sizes="(min-width: 640px) 480px, 100vw"
        className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.04]"
      />
      {total > 1 && (
        <div className="absolute inset-x-0 bottom-2.5 flex justify-center gap-1.5">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIndex(i);
              }}
              aria-label={`Show screenshot ${i + 1} of ${total}`}
              className={`h-1.5 rounded-full shadow-sm transition-all ${
                i === index ? "w-5 bg-white" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function WorkCard({
  item,
  style,
}: {
  item: WorkItem;
  style?: CSSProperties;
}) {
  const [open, setOpen] = useState(false);
  const isInteractive = Boolean(item.details);
  const screenshots = item.screenshots ?? [];

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (!isInteractive) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
    }
  };

  return (
    <>
      <div style={style} className="flex h-full flex-col gap-3">
        <CategoryBadge category={item.category} />
        <article
          role={isInteractive ? "button" : undefined}
          tabIndex={isInteractive ? 0 : undefined}
          onClick={isInteractive ? () => setOpen(true) : undefined}
          onKeyDown={handleKeyDown}
          className={`group flex flex-1 flex-col overflow-hidden rounded-2xl border border-border bg-background-elevated transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_0_50px_-20px_var(--color-accent)] ${
            isInteractive ? "cursor-pointer" : ""
          }`}
        >
          {/* <CardThumbnail images={screenshots} alt={item.title} /> */}
          <div className="flex flex-1 flex-col gap-3 p-6">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-xl">
                {item.title}
              </h3>
              <span className="font-mono text-xs whitespace-nowrap text-muted">
                {item.period}
              </span>
            </div>
            <p className="text-xs font-medium tracking-wide text-muted uppercase">
              {item.client}
            </p>
            <p className="text-sm leading-relaxed text-muted">
              {item.description}
            </p>
            <ul className="mt-2 flex flex-wrap gap-2 pt-2">
              {item.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <div className="mt-auto border-t border-border pt-4">
              <Link
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-accent"
              >
                Visit project website
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </article>
      </div>
      {open && item.details && (
        <ProjectModal
          item={item as WorkItem & { details: NonNullable<WorkItem["details"]> }}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

function ResumeCallout() {
  return (
    <div className="mt-6 flex flex-col items-center gap-8 rounded-2xl border border-border bg-background-elevated p-8 sm:flex-row sm:justify-between">
      <div className="flex flex-col items-start gap-4 text-center sm:text-left">
        <div>
          <p className="text-lg font-semibold tracking-tight">
            Want to see my complete working history?
          </p>
          <p className="mt-1 text-sm text-muted">Take a look at my resume.</p>
        </div>
        <Link
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/60 hover:text-accent"
        >
          View resume
          <span aria-hidden>→</span>
        </Link>
      </div>
      <Link
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative h-48 w-36 shrink-0 overflow-hidden rounded-lg border border-border shadow-2xl transition-transform duration-300 hover:scale-[1.03] sm:h-56 sm:w-40"
      >
        <Image
          src={resumePreview}
          alt="Resume preview"
          fill
          sizes="160px"
          className="object-cover object-top"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
      </Link>
    </div>
  );
}

export function SelectedWork() {
  return (
    <section
      id="work"
      className="relative scroll-mt-24 overflow-hidden border-t border-border/60 bg-background"
    >
      <Spotlight />
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <Reveal>
          <h2 className="mb-16 text-sm font-medium tracking-widest text-muted uppercase">
            Selected work
          </h2>
        </Reveal>
        <RevealStagger
          y={30}
          stagger={0.12}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {workItems.map((item) => (
            <WorkCard key={item.title} item={item} />
          ))}
        </RevealStagger>
        <Reveal delay={0.1}>
          <ResumeCallout />
        </Reveal>
      </div>
    </section>
  );
}
