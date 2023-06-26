import './App.css'
import { GamepadProvider } from './Gamepad'
import { useEffect } from 'react'

function App() {
  const sendRequest = async event => {
    event.target.disabled = true
    try {
      const list = await window.api.invoke('list')
      console.log(list)
      event.target.disabled = false
    }
    catch (err) { console.error(err) }
  }

  return (
    <GamepadProvider>
      <button onClick={sendRequest} autoFocus>Send</button>
    </GamepadProvider>
  )
}

export default App
