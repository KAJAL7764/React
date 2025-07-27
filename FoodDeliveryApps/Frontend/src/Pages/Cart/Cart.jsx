

import { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart= () => {
    const {cartItems, food_list, removeFromCart, getTotalCartAmount, url} = useContext(StoreContext);
    const navigate = useNavigate();
  return (
    <div className='cart' >
    <div className="cart-items">
        <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quntity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <br />
        <hr />


   {food_list.map((item) => {
  if (cartItems[item._id] > 0) {
    return (
      <div key={item._id}>
        <div className="cart-items-title cart-items-item">
          <img src={url+"/images/"+item.image} alt={item.name} />
          <p>{item.name}</p>
          <p>${item.price}</p>
          <p>{cartItems[item._id]}</p>
          <p>${item.price * cartItems[item._id]}</p>
          <p onClick={() => removeFromCart(item._id)} className="cross">x</p>
        </div>
        <hr />
      </div>
    );
  }
  return null;
})}

  </div> 

  <div className="cart-bottom">
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
    <button 
  onClick={() => navigate('/order')} 
  disabled={getTotalCartAmount() === 0}
>
  Proceed to checkout
</button>

    </div> 


    <div className="cart-promocode">
    <div>
      <p>If you have a promo code, Enter it here</p>

      <div className="cart-promocode-input">
        <input type="text" placeholder='promo code'  />
        <button>Submit</button>
      </div>
      </div>
    </div>


  </div>  
  </div> 
  )
}

export default Cart;
