import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/logo.svg'
import { useTheme } from '../../context/theme.context'

import { DarkSwitch } from '../DarkSwitch'

import style from './style.module.css'

export const Header = () => {
    const { isActive, theme } = useTheme()

    const pages = [
        { name: 'about me', path: '/' },
        { name: 'experiences', path: '/exp' },
        { name: 'contact', path: '/contact' },
    ]

    return (
        <div
            className={style.container}
            style={{ 'background-color': theme.white }}>

            <div className={`${style.logoContainer} ${isActive ? style.logoActive : ''}`}>
                <Link to='/'>
                    <Logo className={style.logo}/>
                </Link>
            </div>
            <ul className={style.links}>
                {pages.map((page) => {
                    return (
                        <li key={page.name}>
                            <Link
                                to={page.path}
                                style={{ color: theme.black }}
                            >{page.name}</Link>
                        </li>
                    )
                })}
            </ul>
            <DarkSwitch />
        </div>
    )
}