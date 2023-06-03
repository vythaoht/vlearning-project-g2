import React from 'react'
import styles from './thinkingProgram.module.scss'

type Props = {}

function ThinkingProgram({ }: Props) {
    return (
        <section className={styles.thinking}>
        <div className={styles.tagName}>
          <button className={styles.program__name}>
            <i className="fas fa-desktop"></i>
            <span className="ml-2">Tư duy lập trình</span>
          </button>
        </div>
      </section>
    )
}

export default ThinkingProgram
