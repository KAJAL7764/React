import  { useContext, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios'

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url} = useContext(StoreContext);
const [data, setData] = useState({
  firstname:"",
  lastname:"",
  email:"",
  street:"",
  city:"",
  state:"",
  zipcode:"",
  country:"",
  phone:""
})




const onChangeHandler = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  setData(data=>({...data, [name]:value}))
}


const placeOrder = async (e) => {
e.preventDefault();
let orderItems = [];
food_list.map((item) => {
  if (cartItems[item._id]>0) {
    let itemInfo = item;
    itemInfo["quantity"] = cartItems[item._id];
    orderItems.push(itemInfo);
    
  }
})
// console.log(orderItems);
let orderData = {
  address: data,
  items:orderItems, 
  amount: getTotalCartAmount() + 40,
}

console.log("Sending orderData:", orderData);
let response = await axios.post(url+"/api/order/place", orderData, {headers:{token}})
if (response.data.success) {
  const {session_url} = response.data;
  window.location.replace(session_url);
  
}
else{
  alert("Error");
}
}

  return (

      <form onSubmit={placeOrder} className='place-order' >
        <div className="place-order-left">
<p className="title">Delivery Information</p>
<div className="multi-fields">
  <input name='firstname' onChange={onChangeHandler} value={data.firstname} type="text"  placeholder='first name'  required/>

  <input name='lastname'  onChange={onChangeHandler} value={data.lastname}  type="text" placeholder=' last name' required />

</div>

  <input name='email'  onChange={onChangeHandler} value={data.email} type="email" placeholder='Email address' required />

  <input name='street'  onChange={onChangeHandler} value={data.street} type="text" placeholder='street, suite, etc.' required />

  <div className="multi-fields">
  <input  name='city'  onChange={onChangeHandler} value={data.city} type="text"  placeholder='City name required'/>

  <input name='state'  onChange={onChangeHandler} value={data.state} type="text" placeholder='State' required />

</div>

  <div className="multi-fields">
  <input name='zipcode'  onChange={onChangeHandler} value={data.zipcode} type="text"  placeholder='Zip code' required/>


  <input name='country'  onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' required />

</div>
  
  <input name='phone'  onChange={onChangeHandler} value={data.phone} type="number"  placeholder='phone' required/>

        </div>

        <div className="place-order-right">
        <div className="cart-total">
      <h1>Cart Total</h1>
      <div>

      <div className="cart-total-details">
          <p>Subtotal</p>
          <p>${getTotalCartAmount()}</p>
        </div>
        <hr />

        <div className="cart-total-details">
          <p>Delivery fee</p>
          <p>&{getTotalCartAmount() === 0? 0 : 40}</p>
        </div>
         <hr />

        <div className="cart-total-details">
          <b>Total</b>
          <b>${getTotalCartAmount() === 0? 0: getTotalCartAmount()+40}</b>
        </div>

    </div> 
      <button type='submit'>Proceed to payment</button>
    </div> 

        </div>
      </form>

  )
}

export default PlaceOrder;