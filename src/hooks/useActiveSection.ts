import { useEffect, useState } from "react"

/**
 * Tracks which section is currently under a probe line ~30% down the viewport
 * and returns its id (or null when above the first section, e.g. the hero).
 * Drives the active state in the nav.
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const probe = window.innerHeight * 0.3
      let current: string | null = null
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        // The lowest section whose top has crossed the probe line wins.
        if (el.getBoundingClientRect().top <= probe) current = id
      }
      setActive(current)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [ids])

  return active
}
