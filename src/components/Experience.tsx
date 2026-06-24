import { experience, profile } from "../data/portfolio"
import Section from "./Section"
import styles from "./Experience.module.css"

export default function Experience() {
  return (
    <Section id="experience" label="Experience" title="Where I've worked">
      <ol className={styles.timeline}>
        {experience.map((role) => (
          <li key={role.company} className={styles.role}>
            <div className={styles.period}>{role.period}</div>
            <div className={styles.detail}>
              <h3 className={styles.title}>
                {role.title}{" "}
                <span className={styles.company}>
                  ·{" "}
                  {role.href ? (
                    <a href={role.href} target="_blank" rel="noreferrer">
                      {role.company}
                    </a>
                  ) : (
                    role.company
                  )}
                </span>
              </h3>
              <p className={styles.summary}>{role.summary}</p>
              <ul className={styles.points}>
                {role.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <a className={styles.resume} href={profile.resumeUrl} target="_blank" rel="noreferrer">
        Download résumé
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
        </svg>
      </a>
    </Section>
  )
}
