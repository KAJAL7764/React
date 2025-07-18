function handleFormSubmit(event) {
    event.preventDefault();
    console.log('form was submitted');
}
function Form() {
  return (
    <div>
      <form action="">
        <input type="text" placeholder="write anything" />
        <input onClick={handleFormSubmit} type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Form
