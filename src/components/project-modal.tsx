"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import type { WorkItem } from "@/lib/data";

function ScreenshotCarousel({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);
  const total = images.length;
  const goTo = (i: number) => setIndex((i + total) % total);

  return (
    <div className="mt-6">
      <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-xl border border-border bg-background sm:h-80">
        <Image
          key={images[index]}
          src={images[index]}
          alt={`${alt} screenshot ${index + 1} of ${total}`}
          fill
          sizes="(min-width: 640px) 640px, 100vw"
          className="object-contain p-2"
        />
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous screenshot"
              className="absolute top-1/2 left-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background-elevated/80 text-foreground backdrop-blur-sm transition-colors hover:border-accent/60 hover:text-accent"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next screenshot"
              className="absolute top-1/2 right-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background-elevated/80 text-foreground backdrop-blur-sm transition-colors hover:border-accent/60 hover:text-accent"
            >
              →
            </button>
          </>
        )}
      </div>
      {total > 1 && (
        <div className="mt-3 flex justify-center gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to screenshot ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-accent" : "w-1.5 bg-border"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function ProjectModal({
  item,
  onClose,
}: {
  item: WorkItem & { details: NonNullable<WorkItem["details"]> };
  onClose: () => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 200);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { details } = item;

  return createPortal(
    <div
      className={`fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto px-4 py-10 transition-opacity duration-200 sm:py-16 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className={`relative w-full max-w-2xl rounded-2xl border border-border bg-background-elevated p-6 shadow-2xl transition-all duration-200 sm:p-8 ${
          visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/60 hover:text-foreground"
        >
          ✕
        </button>

        <p className="text-xs font-medium tracking-wide text-muted uppercase">
          {details.tagline}
        </p>
        <h2
          id="project-modal-title"
          className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          {item.title}
        </h2>

        {details.screenshots && details.screenshots.length > 0 ? (
          <ScreenshotCarousel images={details.screenshots} alt={item.title} />
        ) : (
          <div
            className="mt-6 flex h-40 items-center justify-center rounded-xl border border-border sm:h-48"
            style={{
              background:
                "linear-gradient(135deg, var(--background), var(--background-elevated))",
            }}
          >
            <span className="text-2xl font-semibold tracking-tight text-accent">
              {item.title}
            </span>
          </div>
        )}

        <p className="mt-6 text-sm leading-relaxed text-muted">
          {item.description}
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-border p-4">
            <p className="text-xs text-muted">My role</p>
            <p className="mt-1 text-sm font-medium">{details.role}</p>
          </div>
          <div className="rounded-xl border border-border p-4">
            <p className="text-xs text-muted">Product</p>
            <p className="mt-1 text-sm font-medium">{details.product}</p>
          </div>
          <div className="rounded-xl border border-border p-4">
            <p className="text-xs text-muted">Scope</p>
            <p className="mt-1 text-sm font-medium">{details.scope}</p>
          </div>
        </div>

        <h3 className="mt-8 text-base font-semibold tracking-tight">
          What it does
        </h3>
        <ul className="mt-4 flex flex-col gap-2">
          {details.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-2 text-sm leading-relaxed text-muted"
            >
              <span aria-hidden className="text-accent">
                •
              </span>
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-8 border-t border-border pt-6">
          <Link
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            Visit project website
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </div>,
    document.body,
  );
}
