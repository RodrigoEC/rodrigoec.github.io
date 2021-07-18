import React from 'react'

import { ReactComponent as GuySeated } from '../../assets/guy_seated.svg'
import { ReactComponent as EmailIcon } from '../../assets/email.svg'
import { ReactComponent as GithubIcon } from '../../assets/github.svg'
import { ReactComponent as InstagramIcon } from '../../assets/instagram.svg'
import { ReactComponent as LinkedinIcon } from '../../assets/linkedin.svg'

import { LinkSocialMedia } from '../../components/LinkSocialMedia'

import style from './style.module.css'

export const Contact = () => {
    const links = [
        {title: 'Instagram', body: '@rodrigoeloyc', Icon: InstagramIcon, link: 'www.instagram.com/rodrigoeloyc'},
        {title: 'Github', body: '@RodrigoEC', Icon: GithubIcon, link: 'https://github.com/RodrigoEC'},
        {title: 'e-mail', body: 'rodrigoecavalcanti@gmail.com', Icon: EmailIcon},
        {title: 'Linkedin', body: 'Rodrigo Eloy Cavalcanti', Icon: LinkedinIcon, link: 'www.linkedin.com/in/rodrigo-eloy/'},
    ]



    return (
        <div className={style.container}>
            <section className={style.body}>
                <div className={style.text}>
                    <h1>Contact me</h1>
                    <p>
                        Hi! I’m really glad that you’re here, if you want to reach me you
                        can use any of the social media or e-mail listed below.
                    </p>
                    <ul className={style.links}>
                        {links.map((link) => <li key={link.title}><LinkSocialMedia info={link}/></li>)}
                    </ul>
                </div>
            </section>
            <GuySeated className={style.icon}/>
        </div>
    )
}