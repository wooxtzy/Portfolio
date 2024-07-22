import { useContext, useState } from 'react'
import Top from '../components/Top'
import Project from '../components/Project'
import zone from '../assets/img/zone.png'
import antools from '../assets/img/antools.png'
import cryp from '../assets/img/crypappy.png'
import bc from '../assets/img/bc.png'
import portfolioContext from '../context/portfolioContext';



const Projects = () => {
  const data = {
    title: 'my projects',
    subtitle: 'made with love',
  }
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

    {
      title: 'BlueCollar',
      techs: 'HTML, CSS',
      img: bc,
      link: 'https://wooxtzy.github.io/BlueCollar/'

    },
    {
      title: 'CrypAppy',
      techs: 'HTML, CSS',
      img: cryp,
      link: 'https://wooxtzy.github.io/CrypAppy/'

    },
    {
      title: 'CrypAppy',
      techs: 'HTML, CSS',
      img: cryp,
      link: 'https://wooxtzy.github.io/CrypAppy/'

    },

  ]
  const [className, setClassName] = useState('projects__item')
  return (
    <div  className={`${theme} wrap`}>
      <div className='projects'>
      <Top data={data} />
      <div className="container projects__wrap">
        {projects.map((project, index)=>(
          <Project styleClass={className} key={index} project={project} />
        ))}
      </div>

    </div>
    </div>
    
    
  )
}

export default Projects