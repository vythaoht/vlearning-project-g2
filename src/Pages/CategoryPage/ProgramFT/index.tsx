import React from 'react'
import styles from './programFT.module.scss'


type Props = {}

function ProgramFT({}: Props) {
  return (
    <section className={styles.programFT}>
    <div className={styles.tagName}>
      <button className={styles.program__name}>
        <i className="fas fa-desktop"></i>
        <span className="ml-2">Lập trình Full Stack</span>
      </button>
    </div>
  </section>
  )
}

export default ProgramFT
