import React, { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  let newObj = {
    name: 'kajal',
    age: 20,
    gender:'female'
  }

  let newArr = [1, 2, 3]
  
  return (
    <>
      <h1 className='bg-green-900 text-black p-4 rounded-x font-faimily-cursive mb-8'>Hello world  | Tailwind test... </h1>
  
     <Card userName="softwareWorriors" btnText="click me"/>
     <Card userName="KajalChauhan"/>
    </>
  );
}

export default App;
