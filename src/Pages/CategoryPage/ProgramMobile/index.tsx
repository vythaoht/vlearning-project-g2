import React from 'react'
import styles from './programMobile.module.scss'

type Props = {}

function ProgramMobile({ }: Props) {
  return (
    <section className={styles.programMobile}>
      <div className={styles.tagName}>
        <button className={styles.program__name}>
          <i className="fas fa-desktop"></i>
          <span className="ml-2">Lập trình di động</span>
        </button>
      </div>
    </section>
  )
}

export default ProgramMobile