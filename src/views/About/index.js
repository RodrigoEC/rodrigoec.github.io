import React from 'react'

import Coffee from '../../assets/posts/coffee.jpeg'
import Cake from '../../assets/posts/cake.jpeg'
import Foot from '../../assets/posts/foot.jpeg'
import Jar from '../../assets/posts/jar.jpeg'
import Woman from '../../assets/posts/woman.jpeg'

import { ReactComponent as Heart } from '../../assets/heart.svg'
import { Post } from '../../components/Post'

import style from './style.module.css'

export const About = () => {
    const posts = [
        { name: 'woman', link: 'https://www.instagram.com/p/B6ssVdphu2G/?utm_source=ig_web_copy_link', photo: Woman, alt: 'Photo of a woman with distorted colors'},
        { name: 'coffee', link: 'https://www.instagram.com/p/B5xnZh1A88G/', photo: Coffee, alt: 'Photo of a coffee taked from above'},
        { name: 'cake', link: 'https://www.instagram.com/p/CM8bS5ChwG_/', photo: Cake, alt: 'Photo of a driver from the back seat perspective'},
        { name: 'Jar', link: 'https://www.instagram.com/p/B51XK8NgVq9/', photo: Jar, alt: 'Photo of a Jar that has flowers inside'},
        { name: 'Foot', link: 'https://www.instagram.com/p/CIv3kDlhfcq/', photo: Foot, alt: 'Photo of the foot of a little baby'},
    ]



    return (
        <div >
            <section className={style.aboutMe}>
                <a href='https://github.com/rodrigoec' target='_blank'>

                    <img src='https://avatars.githubusercontent.com/u/42751604?v=4' />
                </a>
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
                    <div className={style.title}>
                        <h1>What I love</h1>
                        <Heart/>
                    </div>
                    <p>
                        Quoting Dr. Ana Cláudia Quintana, “I think is sweeter to define
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
                <ul className={style.posts}>

                    { posts.map((post) => <li className={style.post}><Post post={post}/></li>)}
                </ul>
            </section>



        </div>
    )
}