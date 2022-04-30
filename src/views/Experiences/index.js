import React from 'react'

import { ReactComponent as Guy } from '../../assets/guy.svg'
import { ReactComponent as LittleMonster } from '../../assets/monster.svg'

import { ProgressBar } from '../../components/ProgressBar'
import { ProjectCard } from '../../components/ProjectCard'

import { WelcomeWrapper, InCollegeWrapper, Projects, Text, ExperiencesWrapper, ProjectsWrapper, Programming, PageWrapper } from './styles'

export const Experiences = () => {

    const projects = [
        { title: 'ePol', technologies: ['Python', 'NLTK', 'Spacy', 'Flask'], description: 'Project of the Federal Police of Brazil at UFCG. I had the opportunity to work with both data analysis and frontend in this project.', link: 'http://www.computacao.ufcg.edu.br/graduacao/informes/projetoepolelancadocomsolenidadeembrasilia' },
        { title: 'SoLanches', technologies: ['React', 'JavaScript'], description: 'SoLanches is a project that aims to create a platform so the shops in city of Solanea-PB can have a showcase to sell their products', link: 'https://github.com/SoLanches/Frontend-SoLanches' },
        { title: 'HoCo', technologies: ['React', 'JavaScript'], description: 'HoCo is an application created to support Computer Science students at UFCG when it comes to the management of their Complementary Activities.', link: 'https://github.com/Guardians-DSC/HoCo' },
        { title: 'AnonymousCents', technologies: ['Python', 'GoogleAPIs'], description: 'The first application that I create with a friend in 2020 so we could solve a grade disponibility problem. I was really fun to work on it.', link: 'https://github.com/BiggerThanOurselves/anonymousCents' },
        { title: 'Hacktoberfest 2020', technologies: ['JavaScript', 'HTML', 'CSS'], description: 'Event brought by OpenDevUFCG. At the event I collaborated as a volunteer with the implementation of the event site.', link: 'https://opendevufcg.org/hacktoberfest/' },
        { title: 'Andromedev 2020', technologies: ['React', 'Gatsby', 'JavaScript'], description: 'I had the privilege to participate of this event both as a andromedev apprentice in the project of the organization LabRua and as an organizer of the event', link: 'https://andromedev.opendevufcg.org/' },
        { title: 'N.Y here we go!', technologies: ['React', 'JavaScript', 'Notion API'], description: 'Site for me and a friend to prepare our post graduation trip to New York.', link: 'https://github.com/RodrigoEC/N.Y-here-we-go' },
        { title: 'CCKut', technologies: ['React', 'JavaScript'], description: 'Site to show the students of Computer Science at UFCG the t-shirts that me and a friend were selling.', link: 'https://github.com/BiggerThanOurselves/CCamiseiros' },
    ]

    return (
        <PageWrapper>
            <WelcomeWrapper>
                <h1>Hi again!</h1>
                <p>This page is like the summary of my professional experiences in college.</p>
            </WelcomeWrapper>
            <InCollegeWrapper>
                <Text>
                    <h1>College</h1>
                    <p>
                        Well, because of the pandemic the answer to "wich semester I'm in" is
                        a little abstract right now haha, so based on the disciplines that I already
                        took, the complementary activities that I participated and the experiences
                        that I had I created this visualization of where I am in college.
                    </p>
                    <ProgressBar />
                </Text>
                <Guy />
            </InCollegeWrapper>
            <ExperiencesWrapper>
                <LittleMonster />
                <Text>
                    <div>
                        <h1>My Experiences</h1>
                        <p>
                            I’m currently working at <span>ePol</span> since march of 2020. ePol is a project of the Federal Police of Brazil
                            at the Federal University of Campina Grande (UFCG).
                        </p>
                        <p>
                            Besides that, I’ve been a <span>@OpenDevUFCG</span> core member since february of 2021 and it
                            has been a amazing opportunity to contribute with the Computer Science community at UFCG.
                        </p>
                        <p>
                            Last but not least, in June of 2021 I created a project named <span>HoCo</span>, a project that aims
                            to help the students to manage their Complementary hours that are needed to finish
                            college and that's a project that I’m in love with it.
                        </p>
                    </div>
                    <Programming>
                        <div>
                            <h2>Languages</h2>
                            <p>JavaScript - Python - Java</p>
                        </div>
                        <div>
                            <h2>Technologies</h2>
                            <p>React - Gatsby - Flask - SpringBoot</p>
                        </div>
                    </Programming>
                </Text>
            </ExperiencesWrapper>
            <ProjectsWrapper>
                <Text>
                    <h1>Projects that I've worked on</h1>
                    <p>
                        Here are some of the projects that I've worked on and that I would like to highlight it.

                    </p>
                    <p>
                        If you’re interested in it, just click in the card and you’ll be redirect to a link that is
                        related to the project.
                    </p>
                </Text>
                <Projects>
                    {projects.map((project) => {
                        return (
                            <li key={project.title}>
                                <ProjectCard project={project} />
                            </li>
                        )
                    })}
                </Projects>
            </ProjectsWrapper>
        </PageWrapper>
    )
}