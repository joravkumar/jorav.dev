import type { ReactNode } from "react"
import { useReveal } from "../hooks/useReveal"
import styles from "./Section.module.css"

type Props = {
  id: string
  label: string
  title: string
  children: ReactNode
}

export default function Section({ id, label, title, children }: Props) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section id={id} className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.head}>
          <p className="eyebrow">{label}</p>
        </div>
        <div ref={ref} className={`reveal ${styles.body}`}>
          <h2 className={styles.title}>{title}</h2>
          {children}
        </div>
      </div>
    </section>
  )
}
