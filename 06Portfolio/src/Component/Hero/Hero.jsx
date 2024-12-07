// import React from 'react'
import './Hero.css'
import profilePic from '../../assets/profilePic.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
    <img src={profilePic} alt='profilePic' />
      <h1><span>I&apos;m <h2>Kajal Chauhan </h2> </span>  fronted developer </h1>
      <p> I&apos;m a software developer and i dont know anything about software developer</p>
      <div className='hero-action'>
        <div className='hero-connect'>
         <AnchorLink className="anchor-link" offset={50} href='#contact'> Connect with me</AnchorLink></div>
        <div className='hero-resume'>My Resume</div>
      </div>
    </div>
  )
}

export default Hero
