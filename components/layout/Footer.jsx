/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

const Footer = ({ footerNav }) => {

    const renderMenu = footerNav.map(item => {

        return <>
            <div className="col-lg-3 width-30 mb-30">
                <h4 className="text-heading-5">{item.title}</h4>
                {item.items.length > 0 && 
                    <ul className="menu-footer mt-20">
                        {item.items.map(subItem => {
                            return <li>
                                <Link href={subItem.path}><a><i className={`fi fi-rr-${subItem.Icon}`} />{subItem.title}</a></Link>
                            </li>
                        })}
                    </ul>
                }
            </div>
        </>
    })

    return (
        <>
            <footer className="footer mt-50">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 width-25 mb-30">
                            <h4 className="text-heading-5">Contact</h4>
                            <div className="mt-20 text-body-text color-gray-600 mb-20">4517 Washington Ave. Manchester, Kentucky 39495</div>
                            <div className="mt-20 text-body-text color-gray-600">(239) 555-0108</div>
                            <div className="text-body-text color-gray-600">contact@agon.com</div>
                        </div>

                        {renderMenu}
                    </div>

                    <div className="footer-bottom mt-20">
                        <div className="row">

                            <div className="col-md-6">
                                <span className="color-gray-400 text-body-lead">© SICSA</span>
                                <Link href="/page-terms">
                                    <a className="text-body-text color-gray-400 ml-50">Privacy policy</a>
                                </Link>
                                <Link href="/page-terms">
                                    <a className="text-body-text color-gray-400 ml-50">Cookies</a>
                                </Link>
                                <Link href="/page-terms">
                                    <a className="text-body-text color-gray-400 ml-50">Terms of service</a>
                                </Link>
                            </div>

                            <div className="col-md-6 text-center text-lg-end text-md-end">
                                <div className="footer-social">
                                    <Link href="https://facebook.com">
                                        <a className="icon-socials icon-facebook"></a>
                                    </Link>
                                    <Link href="https://twitter.com">
                                        <a className="icon-socials icon-twitter"></a>
                                    </Link>
                                    <Link href="https://www.instagram.com">
                                        <a className="icon-socials icon-instagram"></a>
                                    </Link>
                                    <Link href="https://www.linkedin.com">
                                        <a className="icon-socials icon-linkedin"></a>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer