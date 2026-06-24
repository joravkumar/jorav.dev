import type { Theme } from "../hooks/useTheme"
import { useActiveSection } from "../hooks/useActiveSection"
import ThemeToggle from "./ThemeToggle"
import styles from "./Nav.module.css"

type Props = {
  theme: Theme
  onToggleTheme: () => void
}

const links = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
]

// Stable reference so the scrollspy effect doesn't re-run each render.
const sectionIds = links.map((l) => l.id)

export default function Nav({ theme, onToggleTheme }: Props) {
  const active = useActiveSection(sectionIds)

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`} aria-label="Primary">
        <a href="#top" className={styles.wordmark}>
          jorav<span className={styles.dot}>.</span>dev
        </a>
        <div className={styles.right}>
          <ul className={styles.links}>
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={active === l.id ? styles.active : undefined}
                  aria-current={active === l.id ? "true" : undefined}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </nav>
    </header>
  )
}
