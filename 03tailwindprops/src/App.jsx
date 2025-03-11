import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: 'utkarsh',
    age: 23
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username='chai' someObj={myObj} id='1'/>
      <Card username='code' someObj={[1,2,3]} />
      <Card username='test' someObj={{username: 'ishu', chai: 23}} id='2' />
        {/* to pass an object or an array as a prop, store them in a varible and pass it
        if want to pass directly, keep them inside {} */}
    </>
  )
}

export default App
