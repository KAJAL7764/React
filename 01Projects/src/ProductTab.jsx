import Products from "./Products"
import  "./ProductTab.css";

export default function ProductTab() {
  let options = ["hi-tech", "durable", "fastabl"];
  // let options2 = {a: "hi-tech", b: "durable", c: "fast" }

  return (
    <div>
      <Products title="phones" price={3000} features={options} features2={["hi-tech", "durable", "fast" ]} />
      <Products title="laptops" price={95000}/>      
      <Products title="Tv" price={600 / 2} />
      <Products title="pan" price={100}/>

    </div>
  )
}
