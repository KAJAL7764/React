import React, { useState } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_open from '../../assets/menu_open.png';
import menu_close from '../../assets/menu_close.png';
import  { useRef } from 'react';

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
<li> <AnchorLink className="anchor-link" offset={50} href='#services'> <p onClick={() => setMenu("services")}>Services</p> </AnchorLink> </li>

  {/*Work navbar*/}
<li> <AnchorLink className="anchor-link" offset={50} href='#mywork'> <p onClick={() => setMenu("work")}>My latest work</p> </AnchorLink></li>

  {/*Contact navbar*/}
<li> <AnchorLink className="anchor-link" offset={50} href='#contact'> <p onClick={() => setMenu("contact")}>Contact</p> </AnchorLink> </li>

  {/*Connect with me navbar*/}
<div className="nav-connect"> <AnchorLink className="anchor-link" offset={50} href='#contact'>Connect with me</AnchorLink></div>
      {/* </ul>  */}
      </ul>
      </div>
 </> 
    )
}
export default Navbar;