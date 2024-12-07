// import React from 'react'
import './Footer.css';
import footer_icon from '../../assets/footer_icon.png';
import user from '../../assets/user_icon.png';

export default function Footer() {
  return (
    <div className='footer'>
    <div className="footer-top">
        <div className="footer-top-left">
           <img src={footer_icon} alt="" />
            <p>I'm a passionate web developer with a knack for creating engaging and user-friendly websites. With a background in computer science and a love for coding, I enjoy turning complex problems into simple, beautiful, and intuitive designs.</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user} alt="" />
                <input type="email" placeholder='Enter your email'  />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
    </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">&copy; 2024 kajal. All rights reserved </p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy policy</p>
            <p>Connect with me</p>
      </div>
    </div>
    </div>
  )
}
