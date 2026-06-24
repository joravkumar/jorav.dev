import { profile } from "../data/portfolio"
import Section from "./Section"
import styles from "./Contact.module.css"

export default function Contact() {
  return (
    <Section id="contact" label="Contact" title="Let's talk">
      <p className={styles.intro}>
        I'm open to senior and staff roles, and to good problems in full-stack
        or AI. Email is the fastest way to reach me.
      </p>

      <a className={styles.email} href={`mailto:${profile.email}`}>
        {profile.email}
      </a>

      <div className={styles.links}>
        <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={profile.links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </Section>
  )
}
