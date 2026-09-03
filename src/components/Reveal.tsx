"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Extra delay before the reveal transition starts, in ms. */
  delay?: number;
  /** Vertical offset (px) the element travels while fading in. */
  y?: number;
  /** Element tag to render. */
  as?: ElementType;
  /** Re-trigger every time the element enters the viewport. */
  repeat?: boolean;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 20,
  as: Tag = "div",
  repeat = false,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            if (!repeat) io.disconnect();
          } else if (repeat) {
            setShown(false);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [repeat]);

  return (
    <Tag
      ref={ref}
      className={`reveal${shown ? " reveal-in" : ""}${className ? ` ${className}` : ""}`}
      style={{ transitionDelay: `${delay}ms`, "--reveal-y": `${y}px` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
