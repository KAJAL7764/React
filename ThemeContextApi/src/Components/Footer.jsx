import { useContext} from 'react';
import  { ThemeContext } from "../ThemeContext";

function Footer(){
    const { isDarkMode } = useContext(ThemeContext);

    return(
        <footer className={`${isDarkMode ? "Footer Footer--dark" : "footer"}`}> 
        <div className="container">
            <p>Copyright &copy; React project | All Rights Reserved.</p>
        </div>
        </footer>
    )
}
export default Footer;

// import React, { useContext } from 'react';
// import { ThemeContext } from '../ThemeContext';

// const Footer = () => {
//   const { isDarkMode } = useContext(ThemeContext);

//   return (
//     <footer className={isDarkMode ? 'footer dark' : 'footer light'}>
//       <p>Footer content here</p>
//     </footer>
//   );
// };

// export default Footer;
