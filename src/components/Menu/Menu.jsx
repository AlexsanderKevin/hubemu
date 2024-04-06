import { House } from '@phosphor-icons/react/dist/ssr'
import styles from './Menu.module.css'
import { List, Play } from '@phosphor-icons/react'

export default function Menu() {
  return (
    <aside className={styles.menu}>
      <h1 className={styles.title}><List/> Menu</h1>

      <div className={styles.linkGroup}>
        <button className={styles.navLink}><House weight='bold' /> Home</button>
        <button className={styles.navLink}><House weight='bold' /> Home</button>
        <button className={styles.navLink}><House weight='bold' /> Home</button>
        <button className={styles.navLink}><House weight='bold' /> Home</button>
      </div>

      <h1 className={styles.title}><Play/> Inicio Rapido</h1>
    </aside>
  )
}
