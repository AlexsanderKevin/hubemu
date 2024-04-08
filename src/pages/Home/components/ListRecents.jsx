import React from 'react';
import { playGame } from '../../../API/playGame';
import styles from './ListRecents.module.css'

export default function ListRecents () {
  return (
    <>
      <h1>Recentes</h1>
      <div 
        data-navigation-index="0" 
        data-orientation="horizontal" 
        className={`${styles.listRecents} navigation-container horizontal`}
      >
        <button className='navigation-item'>item</button>
        <button className='navigation-item'>item</button>
        <button className='navigation-item'>item</button>
        <button className='navigation-item'>item</button>
        <button className='navigation-item' onClick={playGame} >Kingdom Hearts</button>
      </div>
    </>
  )
}
