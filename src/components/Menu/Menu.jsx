import React, { Component } from 'react';
import './estilo.css'

export default class Menu extends Component{
    render() {
        return (
            <nav className='menu-nav'>
                <ul className='menu-list'>
                    <li className='menu-item'><a href='#about-me'>About me</a></li>
                    <li className='menu-item'><a href='#projects'>Projects</a></li>
                    <li className='menu-item'><a href='#thing-i-love'>Things I love</a></li>
                    <li className='menu-item'><a href='#contact'>Contact</a></li>
                </ul>
            </nav>
        )
    }
}