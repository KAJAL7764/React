import { useContext } from 'react';
import { ThemeContext } from "../ThemeContext";

function About() {
    const { isDarkMode } = useContext(ThemeContext);
  return (
    <div>
      <section className={`${isDarkMode ? "about about--dark" : "about"}`}>
        <div className="container">
            <h2>About us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nulla perferendis asperiores maxime, vitae dolor! Tempora reiciendis corporis iure distinctio deleniti provident facilis voluptatibus minus, aspernatur suscipit dolorum iusto quae.</p>
        </div>
      </section>
    </div>
  )
}

export default About


// import React, { useContext } from 'react';
// import { ThemeContext } from '../ThemeContext';

// const About = () => {
//   const { isDarkMode } = useContext(ThemeContext);

//   return (
//     <section className={isDarkMode ? 'about dark' : 'about light'}>
//       <h2>About</h2>
//       <p>This is the about section.</p>
//     </section>
//   );
// };

// export default About;
