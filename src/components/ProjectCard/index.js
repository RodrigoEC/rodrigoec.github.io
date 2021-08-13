import React from 'react'

import { ProjectCardWrapper, Title, Devider, Techs } from './styles'

export const ProjectCard = ({ project }) => {
    const { title, technologies, description, link  } = project
    
    return (
        <ProjectCardWrapper href={link} target='_blank' rel='noreferrer'>
            <Title>{title}</Title>
            <p>{description}</p>
            <Devider/>
            <Techs>
                {technologies.map((tech, index) => <li key={index}><span>{tech}</span></li>)}
            </Techs>
        </ProjectCardWrapper>
    )
}