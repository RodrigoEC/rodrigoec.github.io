import React from 'react';
import './estilo.css'

function Menu() {
    return (
        <nav className='menu-nav'>
            <ul className='menu-list'>
                <li className='menu-item'><a href='#about-me'>About me</a></li>
                <li className='menu-item'><a href='#projects'>Projects</a></li>
                <li className='menu-item'><a href='#things-i-love'>Things I love</a></li>
                <li className='menu-item'><a href='#contact'>Contact</a></li>
            </ul>
        </nav>
    )
}

export default Menu;