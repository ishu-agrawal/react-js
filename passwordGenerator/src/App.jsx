import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [passLength, setPassLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")


  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxy';

    if(numAllowed) str += '0123456789'
    if(charAllowed) str += '!@#$%^&*-_+=[]{}~`'

    for(let i = 1; i <= passLength;  i++ ){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [passLength, numAllowed, charAllowed, setPassword])

  // cannot call directly as in react we cannot control what will be rendered when
  // these controlled by setValue, setState ....
  // passwordGenerator()

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select() // used to highlight the copied text
    // passwordRef.current?.setSelectionRange(0, 3) // will elements lying within the range
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [passLength, numAllowed, charAllowed, passwordGenerator])

  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipBoard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
            type="range"
            min={6}
            max={100}
            value={passLength}
            className='cursor-pointer'
            onChange={(e) => {setPassLength(e.target.value)}}
          />
          <label>Length: {passLength}</label>
        </div>
        <div className="flex items-center gap-x-1">
        <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={() => {
                setNumAllowed((prev) => !prev);
            }}
        />
        <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
            <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={() => {
                    setCharAllowed((prev) => !prev )
                }}
            />
            <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
