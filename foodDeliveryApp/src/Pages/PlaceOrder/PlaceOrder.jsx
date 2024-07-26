import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../Context/StoreContext';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (

      <form className='place-order' >
        <div className="place-order-left">
<p className="title">Delivery Information</p>
<div className="multi-fields">
  <input type="text"  placeholder='first name'/>
  <input type="text" placeholder=' last name' />
</div>
  <input type="email" placeholder='Email address' />
  <input type="text" placeholder='street, suite, etc.' />
  <div className="multi-fields">
  <input type="text"  placeholder='City name'/>
  <input type="text" placeholder='State' />
</div>
  <div className="multi-fields">
  <input type="text"  placeholder='Zip code'/>
  <input type="text" placeholder='Country' />
</div>
  
  <input type="number"  placeholder='phone'/>

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
      <button>Proceed to payment</button>
    </div> 

        </div>
      </form>

  )
}

export default PlaceOrder
