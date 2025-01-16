import Products from "./Products"


function Producttab() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        color: "black",
        justifyContent: "center",
        alignItems: "center",
       
    }
  return (
    <div style={styles}>
      <Products title="Ligitech MX Masters" idx={0}/>
      <Products title="APPLE Watch And Laptops" idx={1} />
      <Products title="Noise Headphons" idx={2} />
      <Products title="RedGear Keyboards" idx={3} />
    </div>
  )
}

export default Producttab
