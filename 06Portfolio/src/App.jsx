import { useState } from 'react';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import About from './Component/About/About';
import Services from './Component/Services/Services';
import MyWork from './Component/MyWork/MyWork';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar/>
<Hero/>
<About/>
<Services/>
<MyWork/>
<Contact/>
<Footer/>
    </>
  )
}

export default App
