import React, { Component } from "react";
import './estilo.css'

export default class Projects extends Component {
    render () {
        return (
            <ul className='projects-list'>
                {this.props.projects.map((project, index) => {
                    return (
                        <li key={index}>
                            <Project
                             title={project.title}
                             description={project.description}
                             technologies={project.technologies}/>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export class Project extends Component {
    render() {
        return (
            <section className='project-item'>
                <h3 className='project-title'>{this.props.title}</h3>
                <p className='project-description'>{this.props.description}</p>
                <ul className='project-technologies'>
                    {this.props.technologies.map((technology, index) => {
                        return (
                            <li key={index} className='project-technology'>{technology}</li>
                        )
                    })}
                </ul>
            </section>
        )
    }
}