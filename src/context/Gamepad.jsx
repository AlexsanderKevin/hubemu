import React, { createContext, useEffect, useState } from 'react'

export const GamepadContext = createContext()

export const GamepadProvider = ({children}) => {
  const [ connectedGamepad, setConnectedGamepad ] = useState(null)

  const handleGamepadConnected = event => {
    setConnectedGamepad(event.gamepad)
    console.log('Gamepad connected.')
  }

  const handleGamepadDisconnected = event => {
    setConnectedGamepad(null)
    console.log('Gamepad disconnected.')
  }

  const mapButton = index => {
    switch (index) {
      case 0: return 'A'
      case 1: return 'B'
      case 2: return 'X'
      case 3: return 'Y'
      case 12: return 'ARROW_UP'
      case 13: return 'ARROW_DOWN'
      case 14: return 'ARROW_LEFT'
      case 15: return 'ARROW_RIGHT'
      default: return null
    }
  }

  const handle_A = () => document.activeElement.click()
  const handle_B = () => console.log('B pressed')
  const handle_X = () => console.log('X pressed')
  const handle_Y = () => console.log('Y pressed')
  const handle_UP = () => console.log('UP pressed')
  const handle_DOWN = () => console.log('donw pressed')
  const handle_LEFT = () => console.log('left pressed')
  const handle_RIGHT = () => console.log('right pressed')

  const handleAction = pressedButtons => {
    if (pressedButtons.includes('A')) handle_A()
    if (pressedButtons.includes('B')) handle_B()
    if (pressedButtons.includes('X')) handle_X()
    if (pressedButtons.includes('Y')) handle_Y()
    if (pressedButtons.includes('ARROW_UP')) handle_UP()
    if (pressedButtons.includes('ARROW_DOWN')) handle_DOWN()
    if (pressedButtons.includes('ARROW_LEFT')) handle_LEFT()
    if (pressedButtons.includes('ARROW_RIGHT')) handle_RIGHT()
  }

  const gameLoop = () => {
    const gamepad = navigator.getGamepads()[connectedGamepad.index]
    const pressed = gamepad.buttons
      .map(( button, index ) => button.pressed && mapButton(index))
      .filter( button => button )

    if (pressed.length) {
      handleAction(pressed)
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
