import React from 'react'
import styles from './webDesign.module.scss'

type Props = {}

function WebDesign({ }: Props) {
  return (
    <section className={styles.design}>
      <div className={styles.tagName}>
        <button className={styles.program__name}>
          <i className="fas fa-desktop"></i>
          <span className="ml-2">Thiết kế Web</span>
        </button>
      </div>
    </section>
  )
}

export default WebDesign