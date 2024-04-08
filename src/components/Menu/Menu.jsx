import { House, GearSix, SquaresFour } from '@phosphor-icons/react/dist/ssr'
import styles from './Menu.module.css'
import { List, Play } from '@phosphor-icons/react'

export default function Menu() {
  return (
    <aside className={styles.menu}>
      <h1 className={styles.title}><List/> Menu</h1>

      <div className={`${styles.linkGroup} navigation-container vertical`} data-navigation-index="10" data-orientation="vertical">
        <button className={`${styles.navLink} active navigation-item`}><House weight='bold' /> Home</button>
        <button className={styles.navLink}><SquaresFour weight='bold' /> Biblioteca</button>
        <button className={styles.navLink}><GearSix weight='bold' /> Configurações</button>
      </div>

      <h1 className={styles.title}><Play/> Inicio Rapido</h1>
    </aside>
  )
}
