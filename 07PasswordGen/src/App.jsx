import { useState, useCallback, useEffect } from 'react';


//function component 
//hooks that allows to use the useState, useEffect and show more
function App() {
  const[length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  
  const passwordGen = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvqzyz";
    if(numberAllowed) string += "0123456789";
    if(charAllowed) string += "!@#$%^&*";
    for(let i = 1; i <= length; i++){
    let char = Math.floor(Math.random() * string.length);
    pass += string.charAt(char);

    }
    setpassword(pass);

  }, [length, numberAllowed, charAllowed])
  const copy = () => {
    navigator.clipboard.writeText(password).then(() => {
      alert('Password copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

useEffect(() => {
  passwordGen();
  

}, [length, charAllowed, numberAllowed, passwordGen])
  return (
    <>

<div className='w-full max-w-md mx-auto shadow-md rounded-lg p-3 m-8 text-white text-center  bg-gray-900 font-black'>  <h1 className='text-3xl '>Password Gen</h1>

  <div className='flex rounded-lg overflow-hidden mb-4'> 

  <input type='text'  value={password} className='outline-none w-full py-2 px-4 text-black' placeholder='password' readOnly></input>
<button className=' text-emerald-900 rounded-sm bg-red-100 text-black text-2xl p-3 font-bold' onClick={copy}>copy</button>
  </div>
<div className='flex text-sm gap-x-3'>
  <div className='flex items-center gap-x-2'>
    <input type='range'  min={10} max={40} value={length}className='cursor-pointer text-left'
    onChange={(e) => {setLength(e.target.value)}}/>
      <label>length: {length} </label>
  </div>
  <div className='flex items-center gap-x-1'>
    <input type='checkbox' defaultChecked = {charAllowed} id='charInp' onChange={() => {
      setcharAllowed((prev) => !prev)
    }}/>
      <label>Character</label>
  </div>
  <div className='flex items-center gap-x-1'>
    <input type='checkbox' defaultChecked = {numberAllowed} id='numInp' onChange={() => {
      setnumberAllowed((prev) => !prev)
    }}/>
    <label>Numbers</label>
  </div>
  </div>
</div>
     
    </>
  )
}

export default App
