import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {  Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
  import Cart from './Pages/Cart/Cart';
  import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Footer from './Components/Footer/Footer';
import AppDownload from './Components/AppDownload/AppDownload';
import LogIn from './Components/LogIn/LogIn';
import Verify from './Pages/Verify/Verify'
import MyOrders from './Pages/Myorders/MyOrders';
// import CartPage from './Components/CartPage/CartPage';


function App() {
  const [showLogin, setShowLogin] = useState(false)

  return (

 <>
 {showLogin? <LogIn setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
     <Navbar setShowLogin = {setShowLogin}/>

<Routes>
     <Route path = '/' element={<Home/>} />
     <Route path = '/cart' element={<Cart/>} />
     <Route path = '/order' element={<PlaceOrder/>} />
     <Route path='/verify' element={<Verify/>}/>
     <Route path='/myorders' element={<MyOrders/>} />
          </Routes>
     </div>
    
     <AppDownload/>
     <Footer/>
 
   </>
 
  )
}

export default App



