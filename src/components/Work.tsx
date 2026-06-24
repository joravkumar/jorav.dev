import type { Project } from "../data/portfolio"
import { workProjects, personalProjects } from "../data/portfolio"
import Section from "./Section"
import styles from "./Work.module.css"

const ArrowIcon = () => (
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
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
)

function Card({ p }: { p: Project }) {
  const primary = p.href ?? p.repo
  return (
    <li className={styles.card}>
      <p className={styles.kind}>
        {p.kind === "personal" ? "Personal" : (p.org ?? "Work")}
      </p>
      <h4 className={styles.name}>
        {primary ? (
          <a href={primary} target="_blank" rel="noreferrer">
            {p.name}
            <ArrowIcon />
          </a>
        ) : (
          p.name
        )}
      </h4>
      <p className={styles.blurb}>{p.blurb}</p>
      <ul className={styles.tags}>
        {p.tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      {p.href && p.repo && (
        <div className={styles.links}>
          <a href={p.href} target="_blank" rel="noreferrer">
            Live
          </a>
          <a href={p.repo} target="_blank" rel="noreferrer">
            Code
          </a>
        </div>
      )}
    </li>
  )
}

export default function Work() {
  return (
    <Section id="work" label="Work" title="Projects">
      <div className={styles.groups}>
        <div className={styles.group}>
          <h3 className={styles.groupTitle}>At Kochar Infotech Ltd.</h3>
          <ul className={styles.grid}>
            {workProjects.map((p) => (
              <Card key={p.name} p={p} />
            ))}
          </ul>
        </div>

        <div className={styles.group}>
          <h3 className={styles.groupTitle}>Personal</h3>
          <ul className={styles.grid}>
            {personalProjects.map((p) => (
              <Card key={p.name} p={p} />
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
