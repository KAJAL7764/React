import React from 'react'
import './About.css';
// import theme_pattern from '../../assets/theme_pattern.png'
import aboutMe from '../../assets/aboutMe.png'

const About = () => {
  return (
    <>
    <div id='about' className='about'>
      <div className='about-title'>
        <h1>About me</h1>
</div>
<div className='about-section'>
    <div className='about-left'>
         <img src={aboutMe} alt=''/>
    </div>
<div className='about-right'>
    <div className='about-para'>
        <p>Hello! I'm KAJAL, I specialize in front-end development, particularly in HTML, CSS, JavaScript, and React. My passion for coding and design drives me to continually improve my skills and stay updated with the latest industry trends.</p>
        <p>I've worked on a variety of projects, from personal blogs to full-fledged web applications. I thrive on challenges and am always looking to learn new things and take my skills to the next level.</p>
    </div>
    <div className='about-skills'>
        <div className='about-skill'><p>HTML & CSS </p><hr style={{width: "70%"}}/></div>
        <div className='about-skill'><p>JavaScript</p><hr style={{width: "60%"}}/></div>
        <div className='about-skill'><p>REACT-JS & Tailwind CSS</p><hr style={{width: "60%"}}/></div>
        <div className='about-skill'><p>Next-Js, MongoDB & Express-Js</p><hr style={{width: "40%"}}/></div>
        <div className='about-skill'><p>C, CPP & DSA</p><hr style={{width: "70%"}}/></div>
    </div>
</div>
</div>
<div className='about-achivements'>
  <div className='about-achivement'>
    <h1>Educator</h1>
      <p>Developed new curriculum:</p>
  </div>
  <hr/>
  <div className='about-achivement'>
    <h1>10+</h1>
      <p>Project Compeleted:</p>
  </div>
  <hr/>
  <div className='about-achivement'>
    <h1>UX/UI</h1>
      <p>Improved design efficiency: </p>
  </div>
</div>
    </div>
    </>
  )
}

export default About
