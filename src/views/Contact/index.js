import React from 'react'

import { ReactComponent as GuySeated } from '../../assets/guy_seated.svg'
import { ReactComponent as EmailIcon } from '../../assets/email.svg'
import { ReactComponent as GithubIcon } from '../../assets/github.svg'
import { ReactComponent as InstagramIcon } from '../../assets/instagram.svg'
import { ReactComponent as LinkedinIcon } from '../../assets/linkedin.svg'

import { LinkSocialMedia } from '../../components/LinkSocialMedia'

import { ContactWrapper, Links, Text, Link } from './styles'

export const Contact = () => {
    const links = [
        {title: 'Instagram', body: '@rodrigoeloyc', Icon: InstagramIcon, link: 'https://www.instagram.com/rodrigoeloyc'},
        {title: 'Github', body: '@RodrigoEC', Icon: GithubIcon, link: 'https://github.com/RodrigoEC'},
        {title: 'e-mail', body: 'rodrigoecavalcanti@gmail.com', Icon: EmailIcon},
        {title: 'Linkedin', body: 'Rodrigo Eloy Cavalcanti', Icon: LinkedinIcon, link: 'https://www.linkedin.com/in/rodrigo-eloy/'},
    ]


    return (
        <ContactWrapper>
            <section>
                <Text>
                    <h1>Contact me</h1>
                    <p>
                        Hi! I'm really glad you're here! if you want to reach me you
                        can use any of the social media or e-mail listed below.
                    </p>
                    <p> <span>Ps:</span> The icons of each social media is a link to their respectively pages.</p>
                    <Links>
                        {links.map((link) => <li key={link.title}><LinkSocialMedia info={link}/></li>)}
                    </Links>
                    <p>You can also download my CV clicking on the button below</p>
                </Text>
                <p>
                    <Link to='/files/cv-rodrigo-eloy.pdf' target="_blank" download>
                        Download CV
                    </Link>
                </p>
            </section>
            <GuySeated />
        </ContactWrapper>
    )
}