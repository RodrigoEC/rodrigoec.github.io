import React, { Component } from 'react';
import InstaPost from '../InstaPost'
import miriam from '../../assets/img/mom.jpeg'
import marimbondo from '../../assets/img/marimbondo.jpeg'
import './estilo.css'
export default class ThingsILove  extends Component {
    render() {
        return (
            <section className='things-i-love-container'>
                <article className='things-i-love-article'>
                    <h3 className='things-i-love-title'>Thing I Love</h3>
                    <p className='things-i-love-paragraph'>
                        Well, besides programming, I really love spanding time reading books and I'm currently been part
                        of a book club.<br />
                        I also really love taking pictures. All the process of finding a new subject of creation,
                        trying to take a good picture and finally editing it makes me feel that I'm
                        creating something unique and kinda special because only I could create it.
                    </p>
                </article>
                <div className='things-i-love-galerry'>
                    <InstaPost image={miriam}/>
                    <InstaPost image={marimbondo}/>
                </div>
            </section>
        )
    }
}