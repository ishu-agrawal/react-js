import { useState } from "react"
import ColorButton from './components/ColorBtn'

function App() {
  const [color, setColor] = useState('olive')
  const colors = ['red', 'green', 'black', 'blue', 'yellow', 'purple'];

  return (
    // <div className="w-full h-screen duration-200" 
    //   style = {{ backgroundColor: color}} >
    //     <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    //       <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
    //         <button onClick={() => setColor('red')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style = {{backgroundColor: 'red'}}>Red</button>
    //         <button onClick={() => setColor('green')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style = {{backgroundColor: 'green'}}>Green</button>
    //         <button onClick={() => setColor('black')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style = {{backgroundColor: 'black'}}>Black</button>
    //         <button onClick={() => setColor('blue')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style = {{backgroundColor: 'blue'}}>Blue</button>
    //         <button onClick={() => setColor('yellow')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style = {{backgroundColor: 'yellow'}}>Yellow</button>
    //         <button onClick={() => setColor('purple')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style = {{backgroundColor: 'purple'}}>Purple</button>
    //       </div> 
    //     </div>
    // </div>

    // --------- optimising the approach - 1
    // <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
    //   <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    //     <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
    //       {colors.map((btnColor) => (
    //         <button
    //           key={btnColor} // Key for list item rendering
    //           onClick={() => setColor(btnColor)}
    //           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    //           style={{ backgroundColor: btnColor }}
    //         >
    //           {btnColor.charAt(0).toUpperCase() + btnColor.slice(1)} {/* Capitalize first letter */}
    //         </button>
    //       ))}
    //     </div>
    //   </div>
    // </div>


    // ------------ using props - 2
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          {colors.map((btnColor) => (
            <ColorButton key={btnColor} color={btnColor} setColor={setColor} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
