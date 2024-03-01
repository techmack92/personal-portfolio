import { faEnvelope, faFilePdf, faFolderOpen, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import LogoM from '../../assets/images/logo-m.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import './index.scss'

const Navigation = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoM} alt='logo' />
            <img className="sub-logo" src={LogoSubtitle} alt='mack' />
        </Link>
        <nav>
            <a href='/' exact="true" activeClassName="active" to="/">
                <FontAwesomeIcon icon={faHome} color="rgb(3, 78, 78)" />
            </a>

            <a href='/about' exact="true" activeClassName="active">
                <FontAwesomeIcon icon={faUser} className="about-link" color="rgb(3, 78, 78)" />
            </a>

            <a href='/portfolio' exact="true" activeClassName="active">
                <FontAwesomeIcon icon={faFolderOpen} className="portfolio-link" color="rgb(3, 78, 78)" />
            </a>

            <a href='/contact' exact="true" activeClassName="active">
                <FontAwesomeIcon icon={faEnvelope} className="contact-link" color="rgb(3, 78, 78)" />
            </a>

            <a href='/resume' exact="true" activeClassName="active">
                <FontAwesomeIcon icon={faFilePdf} className="resume-link" color="rgb(3, 78, 78)" />
            </a>
        </nav>
    </div>
)

export default Navigation