import React, { createContext, useEffect, useState } from 'react'

export const GamepadContext = createContext()

export const GamepadProvider = ({children}) => {
  const [ connectedGamepad, setConnectedGamepad ] = useState(null)

  const handleGamepadConnected = event => {
    setConnectedGamepad(event.gamepad)
    console.log('Gamepad connected.')
  }

  const handleGamepadDisconnected = event => {
    setGamepad(null)
    console.log('Gamepad disconnected.')
  }

  const mapButton = index => {
    switch (index) {
      case 0: return 'A'
      case 1: return 'B'
      case 2: return 'X'
      case 3: return 'Y'
      default: return null
    }
  }

  const handle_A = () => document.activeElement.click()
  const handle_B = () => console.log('B pressed')

  const handleAction = pressedButtons => {
    if (pressedButtons.includes('A')) handle_A()
    if (pressedButtons.includes('B')) handle_B()
  }

  const gameLoop = () => {
    const gamepad = navigator.getGamepads()[connectedGamepad.index]
    const pressed = gamepad.buttons
      .map(( button, index ) => button.pressed && mapButton(index))
      .filter( button => button )

    if (pressed.length) {
      handleAction(pressed.toString())
    }
  }

  useEffect(() => {
    window.addEventListener('gamepadconnected', handleGamepadConnected)
    window.addEventListener('gamepaddisconnected', handleGamepadDisconnected)
  }, [])

  useEffect(() => { if (connectedGamepad) setInterval(gameLoop, 33) }, [connectedGamepad])

  return (
    <GamepadContext.Provider value={{}}>
      {children}
    </GamepadContext.Provider>
  )
}
