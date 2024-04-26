import React from 'react';
import { Sparkle, Play } from '@phosphor-icons/react'
import homeStyles from '../Home.module.css'
import styles from './ListFavorites.module.css'

export default function ListFavorites () {
  const list = [
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
  ]

  return (
    <>
      <h1 className={homeStyles.title}>
        <Sparkle/>
        Favoritos
      </h1>
      <div 
        data-navigation-index="1" 
        data-orientation="horizontal" 
        className={`${styles.listFavorites} navigation-container horizontal`}
      >
        {list.map(( item, index ) => (
          <button 
            className='navigation-item' 
            key={ index }
          >
            { item }
            <span className={ styles.playLabel }>
              <Play weight='bold'/>
              Iniciar
            </span>
          </button>
        ))}
      </div>
    </>
  )
}
