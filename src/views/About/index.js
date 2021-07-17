import React from 'react'
import style from './style.module.css'

export const About = () => {
    return (
        <div >
            <section className={style.aboutMe}>
                <img src='https://avatars.githubusercontent.com/u/42751604?v=4' />
                <div className={style.text}>
                    <h1>Hi!</h1>
                    <p>
                        I’m Rodrigo, a Computer Science student at the fifth semester at the Federal
                        University of Campina Grande (UFCG) in Brazil.
                    </p><p>
                        When it comes to my professional self I like to consider myself a Software Engineet
                        in the making slash Researcher slash just a curious person that likes to solve
                        problems and create thinge.
                    </p>
                </div>
            </section>
            <section className={style.love}>
                <div>
                    <h1>What I love</h1>
                    <p>
                        As Dr. Ana Cláudia Quintana once said, “I think is sweeter to define 
                        ourselves by the things we love”, therefore, who am I?
                    </p><p>
                        I love to create new things and that translates itself in really different 
                        areas of my life. For example, I went to Science Computer college because I 
                        wanted to create solutions to problems of the day-to-day life. I also love 
                        to take photographs, create the scene in my head and try to make it come to 
                        life is one of the things that I’m obsessed about.
                    </p><p>
                    So..who am I? I’m just a creative person that is trying to make life a little bit easier.
                    </p>
                </div>
                <div>

                </div>
            </section>
            


        </div>
    )
}