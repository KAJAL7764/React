import React, { useState } from 'react'

function LogIn() 
  {
     const [username, setUsername] = useState(''); 
     const [password, setPassword] = useState(''); 

     const handleSubmit = (e) =>{
        //do
     }
     return (
    <div>
    <h2>LogIn</h2>
    
      <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
      {" "}
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default LogIn

