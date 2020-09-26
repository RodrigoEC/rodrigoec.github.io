import React, { Component } from "react";
import eu from '../../assets/img/eu.jpeg'
import './estilo.css'

function AboutMe() {
    return (
        <section id='about-me' className='about-me-section'>
            <img src={eu} className='about-me-photo' alt='Me smiling'/>
            <article className='about-me-article'>
                <h2 className='about-me-title'>HI! My name is Rodrigo</h2>

                <p className='about-me-text'>
                    I'm 20 years old and currently at the fourth semester of Computer Science on UFCG (Federal
                    University of Campina Grande), in Brazil. Recently I joined the team of epol, a project of SPlab
                    laboratory in association with the Federal Police of Brazil.<br />
                    As I'm still at the fourth semester I'm not really sure which area I'll follow, but recently I've
                    been
                    really interested in the importance and social impact of <strong>data science</strong> and the
                    necessity of
                    creating things that came with the <strong>front-end development</strong> study. I don't know if
                    I'll
                    turn out to be a front-end developer or a data scientist, but these two are really fun to study and
                    work with.
                </p>
            </article>
        </section>
    )
}

export default AboutMe;