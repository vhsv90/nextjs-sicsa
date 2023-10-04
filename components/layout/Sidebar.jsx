import Link from 'next/link'
import { useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'

const Sidebar = ({ openClass, headerNav }) => {

    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    }

    const sidebarMenu = headerNav.map((item, i) => {

        return <>
            <li className={isActive.key == (i+1) ? "has-children active" : "has-children"}>
                <span onClick={() => handleToggle(i+1)} className="menu-expand">
                    {/* {item.items.length > 0 && <i className="fi-rr-angle-small-down"></i>} */}
                </span>
                <Link href={item.path}><a className="">{item.title}</a></Link>
                {item.items.length > 0 &&
                    <ul>
                        {item.items.map(subitem =>{
                            return <li>
                                <Link href={subitem.path}><a>{subitem.title}</a></Link>
                            </li>
                        })}
                    </ul>}
            </li>
        </>
    })

    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}>
                <PerfectScrollbar className="mobile-header-wrapper-inner">
                    <div className="mobile-header-top">
                        <div className="user-account">
                            {/* <img src="/imgs/template/ava_1.png" alt="Agon" />
                            <div className="content">
                                <h6 className="user-name">
                                    Hi <span className="text-brand">Steven !</span>
                                </h6>
                                <p className="font-xs text-muted">
                                    You have 5 new messages
                                </p>
                            </div> */}
                        </div>
                    </div>
                    <div className="mobile-header-content-area">
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border">
                                <nav>
                                    {/* <h6 className="mb-10">Menu Title</h6> */}
                                    <ul className="mobile-menu font-heading">
                                        {sidebarMenu}
                                    </ul>
                                </nav>
                            </div>

                            {/* TODO: Add footer-navigation here */}
                            <div className="mobile-account">
                                <h6 className="mb-10">Your Account</h6>
                                <ul className="mobile-menu font-heading">
                                    <li>
                                        <Link href="/#"><a>Pending</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><a>Footer</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><a>Navigation</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><a>Integration</a></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="site-copyright color-gray-400 text-body-lead">
                                Copyright 2022 © SICSA
                            </div>
                            <div className="site-copyright color-gray-400">
                                Privacy Policy
                            </div>
                            <div className="site-copyright color-gray-400">
                                Cookies
                            </div>
                            <div className="site-copyright color-gray-400">
                                Terms of Service
                            </div>
                        </div>
                    </div>
                </PerfectScrollbar>
            </div>

        </>
    )

}

export default Sidebar
