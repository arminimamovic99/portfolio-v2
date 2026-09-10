"use client";

import { useEffect, useRef, type CSSProperties } from "react";

export type SpotlightAnchor =
  | "top-left"
  | "top-right"
  | "top-center"
  | "left"
  | "right"
  | "center";

type SpotlightProps = {
  /** "cursor" tracks the pointer (default). "static" renders a fixed glow anchored to a corner/edge. */
  variant?: "cursor" | "static";
  /** Only used by the "static" variant. */
  anchor?: SpotlightAnchor;
  /** Diameter in px. */
  size?: number;
  opacity?: number;
  color?: string;
};

const anchorStyles: Record<SpotlightAnchor, CSSProperties> = {
  "top-left": { top: "-15%", left: "-10%" },
  "top-right": { top: "-15%", right: "-10%" },
  "top-center": { top: "-15%", left: "50%", transform: "translateX(-50%)" },
  left: { top: "50%", left: "-10%", transform: "translateY(-50%)" },
  right: { top: "50%", right: "-10%", transform: "translateY(-50%)" },
  center: { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
};

/**
 * Ambient glow overlay. Must be placed inside a `relative` parent.
 */
export function Spotlight({
  variant = "cursor",
  anchor = "center",
  size = 700,
  opacity = 0.1,
  color = "var(--color-accent)",
}: SpotlightProps) {
  if (variant === "static") {
    return (
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: size,
            height: size,
            opacity,
            background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
            ...anchorStyles[anchor],
          }}
        />
      </div>
    );
  }

  return <CursorSpotlight size={size} opacity={opacity} color={color} />;
}

/**
 * Tracks pointermove on the parent element and positions itself via a CSS
 * transform updated outside React state (rAF-batched) to avoid re-render cost.
 */
function CursorSpotlight({
  size,
  opacity,
  color,
}: {
  size: number;
  opacity: number;
  color: string;
}) {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const parent = glow?.parentElement;
    if (!glow || !parent) return;

    let targetX = parent.clientWidth / 2;
    let targetY = parent.clientHeight / 2;
    let rafId: number | null = null;

    const apply = () => {
      glow.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      rafId = null;
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = parent.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      if (rafId === null) rafId = requestAnimationFrame(apply);
    };

    parent.addEventListener("pointermove", onPointerMove);
    return () => {
      parent.removeEventListener("pointermove", onPointerMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        ref={glowRef}
        className="absolute top-0 left-0 rounded-full blur-3xl"
        style={{
          width: size,
          height: size,
          opacity,
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          transform: "translate3d(50%, 50%, 0) translate(-50%, -50%)",
        }}
      />
    </div>
  );
}
