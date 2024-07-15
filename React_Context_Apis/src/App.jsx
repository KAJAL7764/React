import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
// import Counter from './Component/Counter';
import LogIn from './Component/LogIn';
import Profile from './Component/Profile';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Context APIs in react js</h1>
   <LogIn/>
   <Profile/>
    </>
  );
}

export default App
