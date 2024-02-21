import LogoTitle from '../../assets/images/logo-m.png'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import Logo from './Logo'


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'c', 'k']
    const jobArray = ['f', 'r', 'e', 'e', 'l', 'a', 'n', 'c', 'e', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I'</span>
                    <span className={`${letterClass} _14`}>m</span>
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} index={15}/>
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} index={22}/>
                </h1>
                <h2> Full-Stack Web Developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    )
}

export default Home