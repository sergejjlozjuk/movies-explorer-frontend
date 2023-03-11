import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './MainLayout.css'
function MainLayout() {
    return(
        <>
            <Header headerClassName='header_about'/>
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout