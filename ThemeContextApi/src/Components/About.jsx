import { useContext } from 'react';
import { ThemeContext } from "../ThemeContext";

function About() {
    const { isDarkMode } = useContext(ThemeContext);
  return (
    <div>
      <section className={`${isDarkMode ? "about about--dark" : "about"}`}>
        <div className="container">
            <h2>About us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, impedit corrupti. Reiciendis, accusantium. Tempore quam dolore dicta vero modi similique minus ex accusantium iure, quia sunt architecto accusamus ipsa sint.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nisi eum suscipit eligendi beatae quidem illo veritatis impedit maxime quia. Expedita sapiente repudiandae quidem harum dolores accusamus ipsam atque est!</p>
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
