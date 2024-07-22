import React, { useContext } from 'react'
import Top from '../components/Top'
import htmlIcon from '../assets/img/html.svg'
import cssIcon from '../assets/img/css.svg'
import jsIcon from '../assets/img/js.svg'
import reactIcon from '../assets/img/react.svg'
import nodeIcon from '../assets/img/node.svg'
import figmaIcon from '../assets/img/Figma.svg'
import sassIcon from '../assets/img/sass.png'
import viteIcon from '../assets/img/vite.png'
import gitIcon from '../assets/img/git.svg'
import npmIcon from '../assets/img/npm.svg'
import { Link } from 'react-router-dom'
import arrow from '../assets/img/arrow.svg'
import portfolioContext from '../context/portfolioContext';

const About = () => {
  const data = {
    title: 'about me',
    subtitle: undefined,
  }

  const { theme } = useContext(portfolioContext)

  const skills = [
    {
      icon: htmlIcon,
      title: 'HTML'
    },

    {
      icon: cssIcon,
      title: 'CSS',
    },
    {
      icon: jsIcon,
      title: 'JavaScript',
    },

    {
      icon: reactIcon,
      title: 'React'
    },
    {
      icon: nodeIcon,
      title: 'NodeJS'
    },
    {
      icon: gitIcon,
      title: 'Git'
    },
    {
      icon: sassIcon,
      title: 'Sass'
    },
    {
      icon: npmIcon,
      title: 'NPM'
    },
    {
      icon: figmaIcon,
      title: 'Figma'
    },
    {
      icon: viteIcon,
      title: 'Vite'
    },
  ]

  return (

    <div  className={`${theme} wrap`}>
      <div className='about'>

        <Top data={data} />
        <div className="container about__wrap" data-aos='zoom-in'>
          <div className="about__main" data-aos='slide-up'>
            <h2 className='about__main-title'>
              My Journey in Web - Programming
            </h2>
            <div className="about__main-texts">
              <p className='about__main-text'>
                Hello! My name is Iskandar, I am a front-end developer from Uzbekistan.
              </p>

              <p className='about__main-text'>
                My passion for programming began with creating simple video games using the Unity engine. Later I realized that games are not my thing.
                This is how I first became acquainted with web programming. My journey in web development began with learning the basics of HTML, CSS and JavaScript, and now I am actively working with modern frameworks such as React.
              </p>

              <p className='about__main-text'>
                In my free time, I enjoy spending time with my family or exploring new technologies that help me improve my skills and create more efficient and attractive web applications. I believe that good web applications should not only be functional, but also aesthetically pleasing and user-friendly.
                In my portfolio you will find projects that reflect my approach to development: attention to detail, creative solutions and a commitment to excellence. I am open to new challenges and always happy to collaborate on interesting projects.
                If you have ideas that you want to bring to life, you can contact me below
              </p>
            </div>
          </div>
          <div className="about__skills" data-aos='slide-up'>
            <h3 className='about__skills-title'>My Skills</h3>
            <ul className="about__skills-list">

              {skills?.map((skill, index) => (
                <li key={index} className='about__skills-list-item'><img className='about__skills-list-item__img' src={skill.icon} />{skill.title}</li>
              ))}
            </ul>
          </div>
          <Link className='about__btn' to='/contacts' data-aos='slide-up'><img src={arrow} />  Contact Me</Link>
        </div>

      </div>
    </div>

  )
}

export default About