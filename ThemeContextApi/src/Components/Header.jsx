import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function Header() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <header className={`${isDarkMode ? "header header--darl" : "dark"}`}>
        <button className="header_button" onClick={toggleTheme}>
          { isDarkMode ? "Light Mode" : " Dark Mode "}
        </button>
      </header>
    </div>
  );
}

export default Header;

// import React, { useContext } from 'react';
// import { ThemeContext } from '../ThemeContext';

// const Header = () => {
//   const { isDarkMode, toggleTheme } = useContext(ThemeContext);

//   return (
//     <header className={isDarkMode ? 'header dark' : 'header light'}>
//       <h1>Header</h1>
//       <button onClick={toggleTheme}>
//         Toggle to {isDarkMode ? 'Light' : 'Dark'} Mode
//       </button>
//     </header>
//   );
// };

// export default Header;
