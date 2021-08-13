import React from 'react'

import Coffee from '../../assets/posts/coffee.png'
import Cake from '../../assets/posts/cake.png'
import Foot from '../../assets/posts/foot.png'
import Jar from '../../assets/posts/jar.png'
import Woman from '../../assets/posts/woman.png'

import { ReactComponent as Heart } from '../../assets/heart.svg'
import { Post } from '../../components/Post'

import { AboutMeWrapper, Profile, Text, Title, Posts, LoveWrapper } from './styles'

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
            <AboutMeWrapper>
                <Profile href='https://github.com/rodrigoec' target='_blank' rel='noreferrer'>
                    <img src='https://avatars.githubusercontent.com/u/42751604?v=4'
                        alt='The avatar of my github profile'/>
                </Profile>
                <Text>
                    <Title><h2>Hi!</h2></Title>
                    <p>
                        I’m Rodrigo, a Computer Science student currently in the fifth semester at the Federal
                        University of Campina Grande (UFCG) in Brazil.
                    </p><p>
                        When it comes to my professional self I like to consider that I'm a Software Engineer
                        in the making, slash Researcher, slash just a curious person that likes to solve
                        problems and create new things.
                    </p>
                </Text>
            </AboutMeWrapper>
            <LoveWrapper>
                <Text>
                    <Title>
                        <h2>What I love</h2>
                        <Heart/>
                    </Title>
                    <p>
                        Quoting Dr. Ana Cláudia Quintana, “I think is sweeter to define
                        ourselves by the things we love”, therefore, who am I?
                    </p><p>
                        I'm a person that loves to create new things and this translates itself in really different
                        areas of my life. One good example of that my choice for college, I went to Science Computer because I
                        wanted to solve problems, therefore, I wanted to create their solutions. I also love to spend time taking photos, 
                        create the scene in my head and try to make it come to life is one of the things that I’m obsessed about.
                    </p><p>
                        So...who am I? I’m just a creative person that's trying to make life a little bit easier for people around me.
                    </p>
                </Text>
                <Posts>
                    {posts.map((post) => <li key={post.name}><Post post={post}/></li>)}
                </Posts>
            </LoveWrapper>
        </div>
    )
}