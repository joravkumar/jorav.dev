import { skills, education, awards } from "../data/portfolio"
import Section from "./Section"
import styles from "./About.module.css"

export default function About() {
  return (
    <Section id="about" label="About" title="A bit about me">
      <div className={styles.layout}>
        <div className={styles.left}>
          <div className={styles.prose}>
            <p>
              I've spent most of my career in enterprise SaaS, where the
              software has to keep working for thousands of people who never
              chose to use it. That tends to make you care about the boring
              parts: latency, data isolation, what happens when something fails.
            </p>
            <p>
              Lately a lot of that work is AI. I moved our product from keyword
              search to RAG, wired up LLM features, and spent a lot of time on
              the retrieval and APIs underneath. The model is rarely the hard
              part. Everything around it usually is.
            </p>
            <p>
              On my own time I build small things end to end, like Fineez. I
              like owning a problem from the database to the last bit of UI.
            </p>
          </div>

          <dl className={styles.facts}>
            <div className={styles.fact}>
              <dt>Education</dt>
              <dd>
                {education.map((e) => (
                  <div key={e.school} className={styles.edu}>
                    {e.degree}
                    <span>
                      {e.school} · {e.period}
                      {e.note ? ` · ${e.note}` : ""}
                    </span>
                  </div>
                ))}
              </dd>
            </div>
            <div className={styles.fact}>
              <dt>Recognition</dt>
              <dd>
                {awards.map((a) => (
                  <span key={a}>{a}</span>
                ))}
              </dd>
            </div>
          </dl>
        </div>

        <div className={styles.skills}>
          {skills.map((group) => (
            <div key={group.label} className={styles.group}>
              <h3 className={styles.groupLabel}>{group.label}</h3>
              <ul className={styles.items}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
