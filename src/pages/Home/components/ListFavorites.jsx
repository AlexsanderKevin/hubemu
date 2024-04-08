import React from 'react';

export default function ListFavorites () {
  return (
    <div 
      data-navigation-index="1" 
      data-orientation="horizontal" 
      className={`navigation-container horizontal`}
    >
      <button className='navigation-item'>item</button>
      <button className='navigation-item'>item</button>
      <button className='navigation-item'>item</button>
      <button className='navigation-item'>item</button>
      <button className='navigation-item'>item</button>
    </div>
  )
}
