import { profile } from "../data/portfolio"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.wordmark}>
          jorav<span className={styles.dot}>.</span>dev
        </a>
        <p className={styles.note}>
          Built with React &amp; Vite. © {profile.name}, {YEAR}.
        </p>
        <div className={styles.links}>
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  )
}

// Build-time constant — avoids a re-render-only Date call and is stable in SSR.
const YEAR = 2026
