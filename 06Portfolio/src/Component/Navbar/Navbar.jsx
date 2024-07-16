import React, { useState } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_open from '../../assets/menu_open.png';
import menu_close from '../../assets/menu_close.png';
import  { useRef } from 'react';

// import nav_underline from '../../assets/nav_underline.png'
const Navbar = () => {
  const[menu, setMenu] = useState("home")
  const menuRef = useRef();
  const openMenu = () =>{
    menuRef.current.style.right = "0";
  }

  const closeMenu = () =>{
    menuRef.current.style.right = "-350px";
  }


    return (
      <>
       <div className="navbar">
        <img src={logo} alt=""/>

         <img src= {menu_open} onClick = {openMenu} alt="" className="nav-mob-open" />

         <ul ref={menuRef} className="nav-menu">

          <img src= {menu_close} onClick={closeMenu}  alt="" className="nav-mob-close"/>
       

         {/*Home navbar*/}
       {/* <ul className="nav-menu">  */}
<li> <AnchorLink className="anchor-link" offset={50} href='#home'><p onClick={() => setMenu("home")}>Home</p> </AnchorLink></li>

  {/*About me navbar*/}
<li> <AnchorLink className="anchor-link" offset={50} href='#about'> <p onClick={() => setMenu("about")}>About me</p> </AnchorLink></li>

  {/*Services navbar*/}
<li> <AnchorLink className="anchor-link" offset={50} href='#Services'> <p onClick={() => setMenu("services")}>Services</p> </AnchorLink> </li>

  {/*Work navbar*/}
<li> <AnchorLink className="anchor-link" offset={50} href='#mywork'> <p onClick={() => setMenu("work")}>My latest work</p> </AnchorLink></li>

  {/*Contact navbar*/}
<li> <AnchorLink className="anchor-link" offset={50} href='#contact'> <p onClick={() => setMenu("contact")}>Contact</p> </AnchorLink> </li>

  {/*Connect with me navbar*/}
<div className="nav-connect"> <AnchorLink className="anchor-link" offset={50} href='#contact'>Connect with me</AnchorLink></div>
      {/* </ul> */} 
      </ul>
      </div>
 </> 
    )
}
export default Navbar;


// import React, { useState } from "react";
// import { Link } from 'react-scroll';
// import './Navbar.css';
// import logo from '../../assets/logo.png';
// import nav_underline from '../../assets/nav_underline.png';

// const Navbar = () => {
//   const [menu, setMenu] = useState("home");

//   return (
//     <div id='navbar' className="navbar">
//       <img src={logo} alt="logo"/>
//       <ul className="nav-menu"> 
//         <li>
//           <Link className="andchor-link" to="home" smooth={true} offset={50} duration={500} onClick={() => setMenu("home")}>
//             <p>home</p>
//           </Link>
//           {menu === "home" ? <img src={nav_underline} alt='nav underline'/> : null}
//         </li>
//         <li>
//           <Link className="andchor-link" to="about" smooth={true} offset={50} duration={500} onClick={() => setMenu("about")}>
//             <p>About me</p>
//           </Link>
//           {menu === "about" ? <img src={nav_underline} alt='nav underline'/> : null}
//         </li>
//         <li>
//           <Link className="andchor-link" to="services" smooth={true} offset={50} duration={500} onClick={() => setMenu("services")}>
//             <p>Services</p>
//           </Link>
//           {menu === "services" ? <img src={nav_underline} alt='nav underline'/> : null}
//         </li>
//         <li>
//           <Link className="andchor-link" to="mywork" smooth={true} offset={50} duration={500} onClick={() => setMenu("work")}>
//             <p>Portfolio</p>
//           </Link>
//           {menu === "work" ? <img src={nav_underline} alt='nav underline'/> : null}
//         </li>
//         <li>
//           <Link className="andchor-link" to="contact" smooth={true} offset={50} duration={500} onClick={() => setMenu("contact")}>
//             <p>Contact</p>
//           </Link>
//           {menu === "contact" ? <img src={nav_underline} alt='nav underline'/> : null}
//         </li>
//       </ul>
//       <div className="nav-connect">Contact with me</div>
//     </div>
//   );
// }

// export default Navbar;

