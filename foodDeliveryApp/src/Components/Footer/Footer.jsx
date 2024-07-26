import React from 'react'

import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className="footer-content">
        <div className="footer-content-left">  
<img src={assets.logo1_icon} alt="" />
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam repellendus in molestiae, temporibus facilis labore culpa nobis error facere possimus porro! Minus soluta, recusandae deserunt veritatis obcaecati accusantium facilis neque!</p>
<div className="footer-social-icons">
    <img src={assets.facebook_icon} alt="" />
    <img src={assets.twitter_icon} alt="" />
    <img src={assets.linkedin_icon} alt="" />
</div>
                </div>
            <div className="footer-content-right">
            <h1>Company</h1>
            <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
            </ul>
             </div>
                <div className="footer-content-center">
                  <h1>Get In Touch</h1>
                  <ul>
                    <li>+91 999999999</li>
                    <li>Con@gmailcom</li>
                  </ul>
        </div>
    </div>
      <hr />
      <div className="footer-copyright">copyright 2024 &copy; fusionfeast.com- All right Reserved </div>
    </div>
  )
}

export default Footer
