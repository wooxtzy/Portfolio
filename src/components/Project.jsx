import React from 'react'
import arrow from '../assets/img/arrow.svg'

const Project = ({project, styleClass}) => {
    return (
        <>
            <div data-aos='fade-up' className={`project ${styleClass}`}>
                <div className="project__desc">
                    <h4 className='project__title'>{project.title}</h4>
                    <p className='project__text'>{project.techs}</p>

                </div>

                <a
                    target="_blank"
                    className='project__link'
                    href={project.link}
                >
                    View this site
                    <img src={arrow} />
                </a>

                <img className='project__img' src={project.img} />
            </div>

        </>
    )
}

export default Project