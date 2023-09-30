import { useState } from 'react'
import BackToTop from '@components/layout/BackToTop'
import Footer from '@components/layout/Footer'
import Header from '@components/layout/Header'
import Sidebar from '@components/layout/Sidebar'

function Layout({ children, headerStyle }) {

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

    return (
        <>
            <div  className={openClass && "body-overlay-1"} onClick={handleRemove} />
            {/* TODO: send top navigation to Header/Sidebar component */}
            <Header handleOpen={handleOpen} headerStyle={headerStyle} />
            <Sidebar openClass={openClass} />
            <main className="main">
                {children}
            </main>
            <Footer />
            <BackToTop/>
        </>
    )

}

export default Layout