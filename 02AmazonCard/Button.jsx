function handlingClick(event) {
  console.log("Button clicked");
  console.log(event);
    // your logic here
  }
  function handlingMouseOver() {
    console.log("Goodbye!");
    // your logic here
  }
  function  handlingMouseDown() {
    console.log("Goodbye!!!!!!!!");
    // your logic here
  }
  function  handlingDoubleClick() {
    console.log("this is a double click");
    // your logic here
  }
export default function Button() {
  return (
    <div>
      <button onClick={handlingClick}>Click me!</button>
    
      <p onMouseOver={ handlingMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ab aperiam deserunt eos voluptatibus numquam cupiditate. Porro tempore sapiente inventore impedit quia, quae iste </p>
    <p onMouseDown={ handlingMouseDown}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ab aperiam deserunt eos voluptatibus numquam cupiditate. Porro tempore sapiente inventore impedit quia, quae iste nulla, provident dignissimos nemo aspernatur modi.</p>
    <p onDoubleClick={handlingDoubleClick}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iusto delectus omnis, voluptatum itaque excepturi voluptatem exercitationem. Accusantium, consectetur voluptatibus! Repudiandae, dicta officiis nesciunt provident corrupti sequi libero aperiam dolores?</p>
 
    </div>
  )
}
