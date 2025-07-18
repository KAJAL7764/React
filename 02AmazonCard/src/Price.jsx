

export default function Price({ oldPrice, newPrice}) {
  let oldStyle = {
    textDecorationLine: "line-through",
  }
  let newStyle = {
    fontWeight: "bold",
  }
  let style = {
    backgroundColor: "#e0c367",
    height: "25px",
    padding: "5px 10px",
    borderBottomLeftRadius: "14px",
    borderBottomRightRadius: "14px",
    marginBottom: "17px",
  }
  return (
    <div style={style}>
    <span style={oldStyle}>{oldPrice}</span>
    &nbsp; &nbsp;
    <span style={newStyle}>{newPrice}</span>
     
    </div>
  )
}
