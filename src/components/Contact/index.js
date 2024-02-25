import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);

        return () => clearTimeout(timeoutId); // Cleanup function
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_w3mxoft', 'template_g2abxz9', form.current, {
                publicKey:'gJdPWZGX1Etgcgowy',
            })
            .then(
                () => {
                    alert('Message has been sent📩')
                    window.location.reload(false)   // reload page to clear form
                },
                () => {
                    alert('Failed to send message❌; please try again')
                },
            );
    };

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

                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>

                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    </>)
}
export default Contact