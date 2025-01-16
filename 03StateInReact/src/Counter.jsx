
import {useState} from 'React'
function init() {
  console.log("init was called")
  return Math.random();
}
export default function Counter() {
 let [count, setCount] = useState(init);
 console.log('incCount')
 let incCount = () => 
     {
      
        setCount((currCount) => {
          return currCount + 5;
        });
    setCount((currCount) => {
      return currCount + 3;
    });
    // setCount((currCount) => {
    //   return currCount + 1;
    // });
    // setCount((currCount) => {
    //   return currCount + 1;
    // });
    // setCount(34);
 }
    

  return (
    <div>
      <h1>Count: {count} </h1>
    <button onClick={incCount}>Increase Count</button>
    </div>
  )
}


