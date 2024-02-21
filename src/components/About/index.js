import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faHtml5, faCss3, faReact, faJsSquare, faGitAlt } from '@fortawesome/free-brands-svg-icons'



const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);

        return () => clearTimeout(timeoutId); // Cleanup function
    }, []);

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        index={15}
                    />
                </h1>
                <p>Peace; you can call me Mack. I'm a creative full-stack web developer based in Sacramento, CA. I thrive on crafting innovative + visually captivating web apps that draw you in.</p>
                <p>Currently, I'm juggling the exciting world of higher education while diving deep into honing my JavaScript skills (+ all those fun frameworks that come with it). I'm 
                    naturally curious and love nothing more than discovering new ways to unleash my creative potential.</p>
                <p>By day, you'll find me in the trenches as an IT Technician for a California state agency, but by night I'm on the hunt for a dynamic web development environment that 
                    not only challenges me but also allows me to leverage my strengths while I continue to grow + improve.</p>
                <p>I'm all about embracing challenges + thrive in collaborative settings, so if you're a fellow developer looking to network or team up on exciting projects, count me in.
                    Let's create something dope together!</p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                    </div>

                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>

                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>

                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>

                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>

                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About