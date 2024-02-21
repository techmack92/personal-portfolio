import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../../assets/images/logo-m.png'
import LogoSubtitle from '../../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
            <img className="sub-logo" src={LogoSubtitle} alt='mack' />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#dbce0e" />

            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/about">
                <FontAwesomeIcon icon={faUser} className="about-link" color="#dbce0e" />

            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} className="contact-link" color="#dbce0e" />

            </NavLink>
        </nav>
    </div>
)

export default Sidebar;