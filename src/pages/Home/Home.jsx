import React from 'react';
import ListFavorites from './components/ListFavorites';
import { GamepadProvider } from '../../context/Gamepad';
import ListRecents from './components/ListRecents';
import styles from './Home.module.css'

export default function Home () {

  const sendRequest = async ( event, target ) => {
    event.target.disabled = true
    try {
      const list = await window.api.invoke('playGame', [ target ])
      console.log(list)
      event.target.disabled = false
    }
    catch (err) { console.error(err) }
  }

  return (
    <main className={styles.home}>
      <ListRecents/>
      <ListFavorites/>
    </main>
  )
}
