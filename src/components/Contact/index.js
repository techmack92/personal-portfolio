import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);

        return () => clearTimeout(timeoutId); // Cleanup function
    }, []);

    return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C','o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} 
                        index={15}
                    />
                </h1>
                <p>
                    I'm all about embracing challenges + I thrive in collaborative settings, so if you're a fellow developer looking to network or team up on exciting projects, count me in.
                    Let's create something dope together! - OR - if you have a potential employment proposal or any questions, you're more than welcome to submit the below.
                </p>
            </div>
        </div>
    </>)
}
export default Contact