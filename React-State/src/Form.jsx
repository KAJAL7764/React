import { useState } from "react";

export default function Form() {
    let [fullName, setFullName] = useState("kajal")

    let handleNameChange = (event) => {
        console.log(event.target);
    }
  return (
    <div>
      <input type="text" placeholder="Enter your name" value={fullName} onChange={handleNameChange}/>
      <br />
      <br />
      <button>Submit</button>
    </div>
  )
}
