import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

function CallToAction() {
    const { isDarkMode } = useContext(ThemeContext);
  return (
    <div>
      <section className= {`${isDarkMode ? " cta--dark": "cta light"}`}>
        <div className="container">
            <h2>get started today</h2>
            <p>Sign up now for a free trial and start using our service</p>
            <button className='btn btn-primary'> Sign up</button>
        </div>
      </section>
    </div>
  )
}

export default CallToAction;
