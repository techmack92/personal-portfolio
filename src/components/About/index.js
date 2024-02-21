import './index.scss'
import AnimatedLetters from '../AnimatedLetters'




const About = () => {
    return (
        <div className='container about-page'>
            <div className='tex-zone'>
                <h1>
                    <AnimatedLetters
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        index={15}
                    />
                </h1>
                <p>This is short paragraph 1</p>
                <p>This is short paragraph 2</p>
                <p>This is short paragraph 3</p>
            </div>
        </div>
    )
}

export default About