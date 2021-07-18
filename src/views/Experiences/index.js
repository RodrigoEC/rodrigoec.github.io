import React from 'react'

import { ReactComponent as Guy } from '../../assets/guy.svg'

import { ProgressBar } from '../../components/ProgressBar'

import style from './style.module.css'

export const Experiences = () => {
    return (
        <div> 
            <section className={style.inCollege}>
                <div className={style.text}>
                    <h1>In College</h1>
                    <p>
                        Well, because of the pandemic the concept of wich semester I am it’s
                        a little abstract haha, so based on the disciplines that I already
                        took, the complementary activities that I participated and the experiences
                        that I had I created this visualization of where I am in college.
                    </p>
                    <ProgressBar/>
                </div>
                <Guy className={style.icon}/>
            </section>
        </div>
    )
}