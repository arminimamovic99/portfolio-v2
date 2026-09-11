"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  start?: string;
};

/** Fades and rises a single block into view as it scrolls onto screen. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  start = "top 85%",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start, once: true },
      });
    }, el);

    return () => ctx.revert();
  }, [delay, start]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0, transform: `translateY(${y}px)` }}>
      {children}
    </div>
  );
}

type RevealStaggerProps = {
  children: ReactNode;
  className?: string;
  y?: number;
  stagger?: number;
  start?: string;
  as?: "div" | "ul";
};

/** Fades and rises the direct children of the wrapper into view, one after another. */
export function RevealStagger({
  children,
  className,
  y = 22,
  stagger = 0.08,
  start = "top 85%",
  as = "div",
}: RevealStaggerProps) {
  const ref = useRef<HTMLDivElement & HTMLUListElement>(null);
  const Wrapper = as;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      gsap.set(el.children, { clearProps: "opacity,transform" });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.to(el.children, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger,
        scrollTrigger: { trigger: el, start, once: true },
      });
    }, el);

    return () => ctx.revert();
  }, [stagger, start]);

  return (
    <Wrapper ref={ref} className={className}>
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return child;
        const typed = child as ReactElement<{ style?: CSSProperties }>;
        return cloneElement(typed, {
          style: {
            ...typed.props.style,
            opacity: 0,
            transform: `translateY(${y}px)`,
          },
        });
      })}
    </Wrapper>
  );
}
