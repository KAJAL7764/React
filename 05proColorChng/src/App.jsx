import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("gray")

  return (
    <div className="w-screen h-screen duration-300"
     style={{backgroundColor: color}}>
      <div className="grid gap-6 flex flex-wrap justify-center  bottom-12  inset-x-0 px-2 ">
     
        <div className='flex-wrap justify-center shadow-lg bg-white rounded-full px-3 py-2'>
       <button onClick={() => setcolor("orange")}
       className='outline-none text-2xl px-5 rounded-full shadow-lg' style={{backgroundColor: "orange"}}>
       orange</button>
       <button onClick={() => setcolor("green")} 
       className='outline-none  text-2xl px-5 rounded-full shadow-lg' style={{backgroundColor: "green"}}>
       green</button>
       <button onClick={() => setcolor("aqua")} 
       className='outline-none text-2xl  px-5 rounded-full shadow-lg' style={{backgroundColor: "aqua"}}>
       aqua</button>
       <button onClick={() => setcolor("blue")} 
       className='outline-none text-2xl px-5 rounded-full shadow-lg' style={{backgroundColor: "blue"}}>
       blue</button>
       <button onClick={() => setcolor("purple")} 
       className='outline-none text-2xl px-5 rounded-full shadow-lg' style={{backgroundColor: "purple"}}>
       purple</button>
       <button onClick={() => setcolor("pink")} 
       className='outline-none text-2xl px-5 rounded-full shadow-lg' style={{backgroundColor: "pink"}}>
       pink</button>
       <button onClick={() => setcolor("Violet")} 
       className='outline-none text-2xl gap-x-10 px-5 rounded-full shadow-lg' style={{backgroundColor: "Violet"}}>
      Violet</button>
     </div></div>
  </div>
  
  )
}

export default App
