import { useState } from 'react'

import './App.css'
import LudoBoard from './LudoBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
    <h1>Basic Activity</h1>
    <LudoBoard/>
    </>
  )
}

export default App
