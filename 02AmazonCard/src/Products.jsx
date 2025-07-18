import "./Products.css"
import Price from "./Price"

export default function Products({title, idx }) {
  let oldPrice = ["12, 499", "11, 990", "1, 999", "2, 999"]
  let newPrice = ["11, 499", "10, 990", "3, 999", "5, 999"]
  let description = [["8,000 DPI", "High precision"], ["Latest Model", "TouchScreen"],
   ["Noise Cancellation", "Immersive audio"], 
   ["RGB lighting", "Customizable keys"]]
  return (
    <div className="products">
      <p>{title}</p>
       <p>{description[idx][0]}</p>
       <p>{description[idx][1]}</p>
   
   <Price  oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
    </div>
  )
}
