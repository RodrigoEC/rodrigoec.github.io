import React from 'react'
import { useTheme } from '../../context/theme.context'

import style from './style.module.css'

export const ProjectCard = ({ project }) => {
    const { isActive, theme } = useTheme()
    const { title, technologies, description, } = project
    
    return (
        <div 
            className={style.container}

            >
            <h4 className={style.title}>{title}</h4>
            <p className={style.desc}>{description}</p>
            <div className={style.div}></div>
            <ul className={style.techs}>
                {technologies.map((tech) => <li><span>{tech}</span></li>)}
            </ul>
        </div>
    )
}