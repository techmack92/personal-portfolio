import LogoTitle from '../../assets/images/logo-m.png'
import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
    

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Peace, <br /> I'm
                    <img src={LogoTitle} alt="developer" />
                    ack.
                    <br />
                    web developer
                </h1>
                <h2> Full-Stack Web Developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home