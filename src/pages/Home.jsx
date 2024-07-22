import Top from '../components/Top'
import { Link } from 'react-router-dom'
import zone from '../assets/img/zone.png'
import antools from '../assets/img/antools.png'
import cryp from '../assets/img/crypappy.png'
import arrow from '../assets/img/arrow.svg'
import Project from '../components/Project'
import portfolioContext from '../context/portfolioContext';
import { useContext } from 'react'



const Home = ({currentTheme}) => {

  const { theme } = useContext(portfolioContext)


  const projects = [
    {
      title: 'Zone.',
      techs: 'HTML, CSS, JavaScript',
      img: zone,
      link: 'https://wooxtzy.github.io/Zone./'
    },
    {
      title: 'Antools',
      techs: 'HTML, CSS',
      img: antools,
      link: 'https://wooxtzy.github.io/Antools./'

    },
    {
      title: 'CrypAppy',
      techs: 'HTML, CSS',
      img: cryp,
      link: 'https://wooxtzy.github.io/CrypAppy/'

    },

  ]

  const data = {
    title: 'matnazarov iskandar',
    subtitle: 'frontend-developer',
  }

  return (
    <div className={`wrap ${theme}`}>
      <div className='home'>
      <Top data={data} />
      <div className='container home__wrap'>
        <div className="home__top">
          <div className="home__about">
            <h3 className='home__about-title' data-aos='fade-up'>About Me</h3>
            <p className='home__about-text' data-aos='fade-up'>Hello! My name is Iskandar, I am a front-end developer from Uzbekistan. My journey in web development began with learning the basics of HTML, CSS and JavaScript, and now I am actively working with modern frameworks such as React.</p>
            <Link className='home__about-link' to='/about' data-aos='fade-up'> More <img src={arrow} alt="" /></Link>
          </div>
          
        </div>

        <div className="home__bottom">
          <div className="home__projects" data-aos='fade-up'>
            {projects.map((project, index) => (
              <Project key={index} project={project}/>
            ))}
          </div>
          <div className="home__btns">
            <Link to='/projects' className='home__btn' data-aos='fade-up'> <img src={arrow} />  All Projects</Link>
            <Link to='/contacts' className='home__btn' data-aos='fade-up'> <img src={arrow}/> Contact me</Link>

          </div>
        </div>

      </div>
    </div>
    </div>
      

    
    
  )
}

export default Home