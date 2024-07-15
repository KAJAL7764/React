
function Hero() {
  return (
    <div>
      <section className="hero">
        <h1 className="hero_title">Welcome to my website</h1>
        <p className="hero_subtitle">This is a simple and minimalistic website.</p>
        <button className="hero_button">Learn more</button>
      </section>
    </div>
  )
}

export default Hero


// import React, { useContext } from 'react';
// import { ThemeContext } from '../ThemeContext';

// const Hero = () => {
//   const { isDarkMode } = useContext(ThemeContext);

//   return (
//     <section className={isDarkMode ? 'hero dark' : 'hero light'}>
//       <h1>Hero Section</h1>
//       <p>Welcome to our website!</p>
//     </section>
//   );
// };

// export default Hero;
