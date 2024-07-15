import { useState } from 'react';

import './App.css';
import About from './Components/About';
import CallToAction from './Components/CallToAction';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Header from './Components/Header';
import { ThemeContext } from './ThemeContext';

function App() {
const [isDarkMode, setIsDarkMode] = useState(false);
const toggleTheme = () =>{
  setIsDarkMode(!isDarkMode);
};

  return (
    <div className={`{isDarkMode ? "App dark " : "App"}`}>
      <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
      <About/>
      <CallToAction/>
      <Footer/>
      <Header/>
      <Hero/>
    </ThemeContext.Provider>
     </div>
  )
}

export default App

// App.js


// import React, { useState } from 'react';
// import './App.css';
// import About from './Components/About';
// import CallToAction from './Components/CallToAction';
// import Footer from './Components/Footer';
// import Hero from './Components/Hero';
// import Header from './Components/Header';
// import { ThemeContext } from './ThemeContext';

// function App() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
//       <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
//         <Header />
//         <Hero />
//         <About />
//         <CallToAction />
//         <Footer />
//       </ThemeContext.Provider>
//     </div>
//   );
// }

// export default App;

