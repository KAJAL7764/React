import './Navbar.css';
import logo1_icon from '../../assets/logo1_icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img className='logo' src={logo1_icon} alt="Logo" />
        <span className="admin-title">Admin Panel</span>
      </div>
      <FontAwesomeIcon className='profile' icon={faUser} />
    </div>
  );
}
