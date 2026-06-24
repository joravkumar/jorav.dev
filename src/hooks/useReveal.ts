import { useEffect, useRef } from "react"

/**
 * Adds `is-visible` to the element once it scrolls into view, for a one-shot
 * fade/translate-in. No-ops under prefers-reduced-motion (CSS handles the
 * fallback, so the element is visible regardless).
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.classList.add("is-visible")
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px -12% 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
