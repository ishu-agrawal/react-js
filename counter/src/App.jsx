import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 5;

  // -------------------- HOOKS --------------------
  // hooks are used to update the state of an element in UI

  let [counter, setCounter] = useState(15);

  const incValue = () => {
    console.log('increase value clicked, ', counter);
    if(counter >= 20) return;
    counter = counter + 1
    setCounter(counter)
  }

  const descValue = () => {
    if(counter <= 0) return;
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>vite react</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={incValue}>Increase value</button>
      <br /><br />
      <button onClick={descValue}>Decrease value</button>
    </>
  )
}

export default App
