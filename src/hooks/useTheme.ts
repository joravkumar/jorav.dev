import { useCallback, useEffect, useState } from "react"

export type Theme = "light" | "dark"

function currentTheme(): Theme {
  const attr = document.documentElement.getAttribute("data-theme")
  return attr === "dark" ? "dark" : "light"
}

/**
 * Reads the theme set pre-paint in index.html, and lets the user flip it.
 * Persists the choice to localStorage so it survives reloads.
 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() =>
    typeof document === "undefined" ? "light" : currentTheme()
  )

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    try {
      localStorage.setItem("theme", theme)
    } catch {
      /* storage unavailable — non-fatal */
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setThemeState((t) => (t === "dark" ? "light" : "dark"))
  }, [])

  return { theme, toggleTheme }
}
