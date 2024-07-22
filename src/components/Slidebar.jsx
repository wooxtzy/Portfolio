import React, { useContext, useState } from 'react'
import tgIcon from '../assets/img/tg.png'
import tgIconWhite from '../assets/img/tgWhite.png'
import instIcon from '../assets/img/inst.svg'
import instIconWhite from '../assets/img/instWhite.svg'

import closeIcon from '../assets/img/close.svg'
import closeIconWhite from '../assets/img/closeWhite.svg'
import bmIcon from '../assets/img/bm.png'
import { Link } from 'react-router-dom'
import portfolioContext from '../context/portfolioContext'


const Slidebar = () => {
    const { theme } = useContext(portfolioContext)
    const [view, setView] = useState(false)

    const links = [
        {
            path: '/',
            text: 'home'
        },
        {
            path: '/projects',
            text: 'projects'
        },
        {
            path: '/about',
            text: 'about'
        },
        {
            path: '/contacts',
            text: 'contacts'
        },
    ]

    document.addEventListener('keydown', (e) => {
        if (e.key == 'Escape') {
            setView(false)
        }
    })

    return (
        <>
            <div className="menu__wrap">

                <div className="menu__icon" data-aos='fade-left'>

                    {
                        !view ? (
                            <img className='menu__icon-img' src={bmIcon} onClick={(e) => {
                                setView(!view)
                                e.stopPropagation()
                            }} />
                        ) : (<></>)
                    }

                </div>

                <div onClick={() => {
                    setView(false)
                }} className={view ? 'active__outer' : 'dis__outer'}>
                    <div
                        onClick={(e) => { e.stopPropagation() }}
                        className={view ? 'active menu' : 'disabled menu'}
                    >
                        <div onClick={() => { }} className="menu__close">
                            <img src={theme == 'light' ? closeIcon : closeIconWhite} onClick={() => {
                                setView(false)

                            }} />
                        </div>
                        <div className="menu__links">
                            <div className="menu__links-desc">
                                <h3 className='menu__links-desc__text'>
                                    menu
                                </h3>
                            </div>

                            <ul className="menu__links-main">

                                {links.map((link, index) => (
                                    <li key={index} className='menu__links-main__item'>
                                        <Link
                                            onClick={() => setView(false)}
                                            className='menu__links-main__item-link'
                                            to={link.path}
                                        >
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="menu__contacts">
                            <div className="menu__contacts-main">
                                <a
                                    className='menu__contacts-main__item'
                                    href="mailto:matn.isk2010@gmail.com">
                                    matn.isk2010@gmail.com
                                </a>
                                <a
                                    className='menu__contacts-main__item'
                                    href="tel:+998 97 429 20 91">
                                    +998 97 429 20 91
                                </a>

                            </div>
                            <div className="menu__contacts-social">
                                <a
                                    target="_blank"
                                    className='menu__contacts-social__item'
                                    href="https://www.instagram.com/wooxtzy">
                                    <img className='menu__contacts-social__item-img' src={theme == 'light' ? instIcon : instIconWhite} />
                                </a>
                                <a
                                    target="_blank"
                                    className='menu__contacts-social__item'

                                    href="https://t.me/wooxtzy">
                                    <img className='menu__contacts-social__item-img' src={theme == 'light' ? tgIcon : tgIconWhite} />
                                </a>
                            </div>
                        </div>


                    </div>
                </div>


            </div>

        </>
    )
}

export default Slidebar