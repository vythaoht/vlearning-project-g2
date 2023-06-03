import React from 'react'
import styles from './programFE.module.scss'

type Props = {}

function ProgramFE({ }: Props) {
  return (
    <section className={styles.ProgramFE}>
      <div className={styles.tagName}>
        <button className={styles.program__name}>
          <i className="fas fa-desktop"></i>
          <span className="ml-2">Lập trình Frontend</span>
        </button>
      </div>
    </section>
  )
}

export default ProgramFE