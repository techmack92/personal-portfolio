import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoM from '../../assets/images/logo-m.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoM} alt='logo' />
            <img className="sub-logo" src={LogoSubtitle} alt='mack' />
        </Link>
        <nav>
            <NavLink exact="true" activeClassName="active" to="/">
                <FontAwesomeIcon icon={faHome} color="rgb(3, 78, 78)" />
            </NavLink>

            <NavLink exact="true" activeClassName="active" to="/about">
                <FontAwesomeIcon icon={faUser} className="about-link" color="rgb(3, 78, 78)" />
            </NavLink>

            <NavLink exact="true" activeClassName="active" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} className="contact-link" color="rgb(3, 78, 78)" />
            </NavLink>
        </nav>
    </div>
)

export default Navigation