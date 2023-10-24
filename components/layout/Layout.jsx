import { useState } from 'react'
import BackToTop from '@components/layout/BackToTop'
import Footer from '@components/layout/Footer'
import Header from '@components/layout/Header'
import Sidebar from '@components/layout/Sidebar'

function Layout({ children, headerStyle, navigation }) {

    const [openClass, setOpenClass] = useState('');

    const handleOpen = () => {
        document.body.classList.add("mobile-menu-active");
        setOpenClass("sidebar-visible")
    }

    const handleRemove = () => {
        if (openClass === "sidebar-visible") {
            setOpenClass("")
            document.body.classList.remove("mobile-menu-active");
        }
    }

    const headerNav = navigation.find(obj => { return obj.uiRouterKey === 'header-navigation'}).items
    const footerNav = navigation.find(obj => { return obj.uiRouterKey === 'footer-navigation'}).items

    return (
        <>
            <div  className={openClass && "body-overlay-1"} onClick={handleRemove} />
            <Header handleOpen={handleOpen} headerStyle={headerStyle} headerNav={headerNav} />
            <Sidebar openClass={openClass} headerNav={headerNav} />
            <main className="main">
                {children}
            </main>
            <Footer footerNav={footerNav} />
            <BackToTop/>
        </>
    )

}

export default Layout