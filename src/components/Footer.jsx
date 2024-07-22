import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import up from '../assets/img/up.png'
import portfolioContext from '../context/portfolioContext';
import sun from '../assets/img/sun.png'
import moon from '../assets/img/moon.png'

const Footer = () => {

    const { theme, changeTheme } = useContext(portfolioContext)

    const links = [
        {
            path: '/',
            title: 'home',
        },
        {
            path: '/projects',
            title: 'projects',
        },
        {
            path: '/about',
            title: 'about',
        },
        {
            path: '/contacts',
            title: 'contact',
        }
    ]

    return (
        <>
            <footer className={`footer ${theme}`}>
             {/* <a onClick={()=>{ 
                 window.scrollTo({top:0, behavior:'smooth'}) 
             }} className='footer__top-link'><img src={up}/></a>  */}
                <div className="container footer__wrap">

                    <div className="footer__info" >
                        <div className="footer__info__navbar">
                            {links?.map((link, index) => (
                                <Link data-aos='fade-right' to={link.path} className='footer__info__navbar-item' key={index}>{link.title}</Link>
                            ))}
                        </div>
                        <div className="footer__info__contacts" data-aos='fade-up'>
                            <a className='footer__info__contacts-item' href="mailto:matn.isk2010@gmail.com">matn.isk2010@gmail.com</a>
                            <a className='footer__info__contacts-item' href="tel:+998974292091">+998974292091</a>
                        </div>
                    </div>

                    <div className="footer__btns" data-aos="fade-up">
                        
                        <img onClick={()=>{
                            changeTheme()
                        }} className='footer__btn-switchTheme' src={theme == 'light' ? moon : sun}/>
                    </div>
                </div>
            </footer>
          
        </>
    )
}

export default Footer