import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  // let counter = 13;
  const addValue = () =>{ 
    console.log("clicked", counter );
    for(counter = 0; counter<=20; counter+1)
      if(counter = 0){
        counter = counter + 1;
      }
    }
   
  const removeValue = () =>{
    
setCounter(counter-1);
  }
   
   
  return(
    <>
      <h1>hello world</h1>
      <h2>Counter value: {counter}</h2>
      <p>hey</p>
      <button onClick={addValue}>Add Value</button><br/>
      <button onClick={removeValue}>Remove  Value: </button>
    </>
  )
}

export default App
