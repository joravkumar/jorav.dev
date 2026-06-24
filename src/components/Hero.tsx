import { profile } from "../data/portfolio"
import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={`container ${styles.inner}`}>
        <p className={`eyebrow ${styles.eyebrow}`}>
          {profile.title} · {profile.location}
        </p>

        <h1 className={styles.title}>
          I build for the web,
          <br />
          and the <span className={styles.accent}>AI</span> behind it.
        </h1>

        <p className={styles.lede}>{profile.bio}</p>

        <div className={styles.actions}>
          <a className={styles.primary} href="#work">
            View the work
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a className={styles.ghost} href={`mailto:${profile.email}`}>
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
