import React from "react";
import './estilo.css'

function Projects(props) {
    return (
        <section id='projects' className='projects-container'>
            <h3 className='section-title'>Projects</h3>
            <ul className='projects-list'>
                {props.projects.map((project, index) => {
                    return (
                        <li key={index}>
                            <Project
                                title={project.title}
                                description={project.description}
                                technologies={project.technologies} />
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export function Project(props) {
    return (
        <section className='project-item'>
            <h3 className='project-title'>{props.title}</h3>
            <p className='project-description'>{props.description}</p>
            <div className='project-item-division'></div>
            <ul className='project-technologies'>
                {props.technologies.map((technology, index) => {
                    return (
                        <li key={index} className='project-technology'>{technology}</li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Projects;