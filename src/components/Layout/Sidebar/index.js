import { Link } from 'react-router-dom'
import './index.scss'
import LogoS from '../../../assets/images/logo-m.png'
import LogoSubtitle from '../../../assets/images/logo_sub.png'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
            <img src={LogoSubtitle} alt='mack' />
        </Link>
    </div>
)

export default Sidebar;