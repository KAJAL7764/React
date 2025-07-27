import { createContext, useEffect, useState } from "react";


export const StoreContext = createContext(null)
import axios from 'axios'


const StoreContextProvider = (props) =>{
const [cartItems, setCartItems] = useState({});
const url = "http://localhost:8080";
const [token, setToken] = useState("");
const [food_list, setFoodList] = useState([])

const addToCart = async (itemId) =>{
    if(!cartItems[itemId]){
        setCartItems((prev)=>({...prev,[itemId]:1}))
    }
else{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
}
if (token) { 
    await axios.post(url+"/api/cart/add", {itemId}, {headers:{token}}); 
}
}



const removeFromCart = async (itemId) =>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    if(token) {
        await axios.post(url+"/api/cart/remove", {itemId}, {headers:{token}})
    }
}


const getTotalCartAmount = () =>{
    let totalAmount = 0;
    for (let item in cartItems) 
        {
            if(cartItems[item]>0){
        totalAmount += food_list.find(food => food._id === item).price * cartItems[item];
    }
 }
 return totalAmount;
}


const fetchFoodList = async () => {
    const response = await axios.get(url+"/api/food/list");
    setFoodList(response.data.data);
}


const loadCartData = async (token)  => {
    const response = await axios.post(url+"/api/cart/get", {}, {headers:{token}});
    setCartItems(response.data.cartData);
}

useEffect(() => {
async function loadData() {
    await fetchFoodList();
    if(localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
    }
}
loadData();

}, [])



    const contextValue={
food_list, 
cartItems,
setCartItems,
addToCart,
removeFromCart,
getTotalCartAmount,
url,
token,
setToken
    }
    
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider