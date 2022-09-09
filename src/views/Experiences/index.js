import React from "react";

import { ReactComponent as Guy } from "../../assets/guy.svg";
import { ReactComponent as LittleMonster } from "../../assets/monster.svg";

import { ProgressBar } from "../../components/ProgressBar";
import { ProjectCard } from "../../components/ProjectCard";
import { experiences } from "../../text/en.json";

import {
  WelcomeWrapper,
  InCollegeWrapper,
  Projects,
  Text,
  ExperiencesWrapper,
  ProjectsWrapper,
  Programming,
  PageWrapper,
} from "./styles";

export const Experiences = () => {
  const projects = [
    {
      title: "ePol",
      technologies: ["Python", "NLTK", "Spacy", "Flask"],
      description: experiences.projects.projectsData.epol,
      link: "http://www.computacao.ufcg.edu.br/graduacao/informes/projetoepolelancadocomsolenidadeembrasilia",
    },
    {
      title: "SoLanches",
      technologies: ["React", "JavaScript"],
      description: experiences.projects.projectsData.soLanches,
      link: "https://github.com/SoLanches/Frontend-SoLanches",
    },
    {
      title: "HoCo",
      technologies: ["React", "JavaScript"],
      description: experiences.projects.projectsData.hoco,
      link: "https://github.com/Guardians-DSC/HoCo",
    },
    {
      title: "AnonymousCents",
      technologies: ["Python", "GoogleAPIs"],
      description: experiences.projects.projectsData.anonymousCents,
      link: "https://github.com/BiggerThanOurselves/anonymousCents",
    },
    {
      title: "Hacktoberfest 2020",
      technologies: ["JavaScript", "HTML", "CSS"],
      description: experiences.projects.projectsData.hack2020,
      link: "https://opendevufcg.org/hacktoberfest/",
    },
    {
      title: "Andromedev 2020",
      technologies: ["React", "Gatsby", "JavaScript"],
      description: experiences.projects.projectsData.andro2020,
      link: "https://andromedev.opendevufcg.org/",
    },
    {
      title: "N.Y here we go!",
      technologies: ["React", "JavaScript", "Notion API"],
      description: experiences.projects.projectsData.nyherewego,
      link: "https://github.com/RodrigoEC/N.Y-here-we-go",
    },
    {
      title: "CCKut",
      technologies: ["React", "JavaScript"],
      description: experiences.projects.projectsData.cckut,
      link: "https://github.com/BiggerThanOurselves/CCamiseiros",
    },
    {
      title: "CodeSQ",
      technologies: ["React", "JavaScript", "antdesign"],
      description: experiences.projects.projectsData.codesq,
      link: "rodrigoec.github.io",
    },
  ];

  return (
    <PageWrapper>
      <WelcomeWrapper>
        <h1>{experiences.title}</h1>
        <p>{experiences.subtitle}</p>
      </WelcomeWrapper>
      <InCollegeWrapper>
        <Text>
          <h1>{experiences.college.title}</h1>
          <p>{experiences.college.text}</p>
          <ProgressBar />
        </Text>
        <Guy />
      </InCollegeWrapper>
      <ExperiencesWrapper>
        <LittleMonster />
        <Text>
          <div>
            <h1>{experiences.myExperiences.title}</h1>
            {experiences.myExperiences.text.map((text, id) => (
              <p key={id} dangerouslySetInnerHTML={{ __html: text }} />
            ))}
          </div>
          <Programming>
            <div>
              <h2>{experiences.langs}</h2>
              <p>JavaScript - Python - Java</p>
            </div>
            <div>
              <h2>{experiences.techs}</h2>
              <p>React - Gatsby - Flask - Docker - Docker-compose</p>
            </div>
          </Programming>
        </Text>
      </ExperiencesWrapper>
      <ProjectsWrapper>
        <Text>
          <h1>{experiences.projects.title}</h1>
          {experiences.projects.text.map((text, id) => (
            <p key={id}>{text}</p>
          ))}
        </Text>
        <Projects>
          {projects.map((project) => {
            return (
              <li key={project.title}>
                <ProjectCard project={project} />
              </li>
            );
          })}
        </Projects>
      </ProjectsWrapper>
    </PageWrapper>
  );
};
