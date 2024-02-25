import Navigation from '../Navigation'
import Footer from '../Footer'
import './index.scss'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='App'>
            <Navigation/>
            <div className='page'>
                <span className='tags top-tags'>&lt;body&gt;</span>

                <Outlet />

                <span className='tags bottom-tags'>
                &lt;/body&gt;
                <br />
                <span className='bottom-tag-html'>&lt;/html&gt;</span>
                </span>
            </div>
            <Footer />
        </div>
    )
}

export default Layout