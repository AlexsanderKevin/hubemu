import './App.css'
import Menu from './components/Menu/Menu'
import { GamepadProvider } from './context/Gamepad'
import { useEffect } from 'react'

function App() {
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
    <GamepadProvider>
      <div className='body'>
        <Menu/>
        <main>
          <div data-navigation-index="0" data-orientation="horizontal" className='navigation-container horizontal'>
            <button className='navigation-item'>item</button>
            <button className='navigation-item'>item</button>
            <button className='navigation-item'>item</button>
            <button className='navigation-item'>item</button>
            <button className='navigation-item'>item</button>
          </div>

          <div data-navigation-index="1" data-orientation="horizontal" className='navigation-container horizontal'>
            <button className='navigation-item'>item</button>
            <button className='navigation-item'>item</button>
            <button className='navigation-item'>item</button>
            <button className='navigation-item'>item</button>
            <button className='navigation-item' onClick={sendRequest} >Kingdom Hearts</button>
          </div>

          <div data-navigation-index="2" data-orientation="horizontal" className='navigation-container horizontal'>
            <button className='navigation-item'>item</button>
            <button className='navigation-item'>item</button>
            <button className='navigation-item' onClick={sendRequest} >Kingdom Hearts</button>
          </div>
        </main>
      </div>
    </GamepadProvider>
  )
}

export default App
