import React from 'react';
import ListFavorites from './components/ListFavorites';
import { GamepadProvider } from '../../context/Gamepad';
import ListRecents from './components/ListRecents';
import styles from './Home.module.css'

export default function Home () {

  const sendRequest = async event => {
    event.target.disabled = true
    try {
      const list = await window.api.invoke('playGame', [{
        dirPath: 'D:/Emulador/Emuladores/PS2 - PCSX2',
        gamePath: 'D:/Emulador/ROMS/PS2/Kingdom Hearts 2.iso',
        exeCommand: './pcsx2.exe --nogui --fullscreen'
      }])
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
