import React from 'react'

import style from './style.module.css'

export const ProjectCard = ({ project }) => {
    const { title, technologies, description, link  } = project
    
    return (
        <a  
            href={link}
            target='_blank'
            rel='noreferrer'
            className={style.container}
            >
            <h4 className={style.title}>{title}</h4>
            <p className={style.desc}>{description}</p>
            <div className={style.div}></div>
            <ul className={style.techs}>
                {technologies.map((tech) => <li><span>{tech}</span></li>)}
            </ul>
        </a>
    )
}