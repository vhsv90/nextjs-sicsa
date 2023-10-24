/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
// i18n
import { useTranslation } from 'next-i18next'
// Page Blocks
import strapiService from 'utils/strapi-service'

const Header = ({ handleOpen, headerStyle, headerNav, header}) => {

    const [scroll, setScroll] = useState(0)
    const router = useRouter()
    const { t } = useTranslation('common')

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })

    const renderMenu = headerNav.map(item => {
        return <>
                <li className={item.items.length > 0 ? 'has-children' : 'NA'}>
                    {/* TODO: add active current <a className="active"> */}
                    <Link href={item.path}><a><i className={`fi fi-rr-${item.Icon}`} />{item.title}</a></Link>
                    {item.items.length > 0 && 
                        <ul>
                            {item.items.map(subItem => {
                                return <li>
                                    <Link href={subItem.path}><a><i className={`fi fi-rr-${subItem.Icon}`} />{subItem.title}</a></Link>
                                </li>
                            })}
                        </ul>
                    }
                </li>
        </>
    })

    const imgUrl = `${strapiService.URL}${header.attributes.ImageLogo.data.attributes.url}`
    const altText = header.attributes.ImageLogo.data.attributes.alternativeText

    return (
        <>
            <header className={scroll ? `${headerStyle} header sticky-bar stick ` : `${headerStyle} header sticky-bar`}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <Link href="/">
                                    <a className="d-flex">
                                        <img alt={altText} src={imgUrl} />
                                    </a>
                                </Link>
                            </div>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <ul className="main-menu">
                                        {renderMenu}
                                    </ul>
                                </nav>
                                <div className="burger-icon burger-icon-white" onClick={handleOpen}>
                                    <span className="burger-icon-top" /><span className="burger-icon-mid" /><span className="burger-icon-bottom" />
                                </div>
                            </div>
                        </div>
                        <div className="header-right">
                            <div className="block-signin">
                                <Link href={router.pathname} locale={router.locale === 'en' ? 'es-CR' : 'en'}>
                                    <a className="btn btn-default hover-up icon-arrow-right">
                                        { header.attributes.ChangeLanguageText }
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header