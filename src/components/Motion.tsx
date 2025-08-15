import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "./Utils";

export function useReveal(stagger = 60, threshold = 0.15) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (prefersReducedMotion()) {
      ref.current?.querySelectorAll(".reveal").forEach(el => el.classList.add("revealed"));
      return;
    }
    const elements = ref.current?.querySelectorAll(".reveal") ?? [];
    let idx = 0;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          setTimeout(() => el.classList.add("revealed"), idx * stagger);
          io.unobserve(el);
          idx++;
        }
      });
    }, { threshold });
    elements.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [stagger, threshold]);
  return ref;
}