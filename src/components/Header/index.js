import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as LogoIcon } from '../../assets/logo.svg'
import { useTheme } from '../../context/theme.context'

import { DarkSwitch } from '../DarkSwitch'

import { HeaderWrapper, Logo, Links } from './styles'

export const Header = () => {
    const { isActive } = useTheme()
    const pages = [
        { name: 'about me', path: '/' },
        { name: 'experiences', path: '/exp' },
        { name: 'contact', path: '/contact' },
    ]

    return (
        <HeaderWrapper>
            <Logo isActive={isActive}>
                <Link to='/'>
                    <LogoIcon />
                </Link>
            </Logo>
            <Links>
                {pages.map((page) => {
                    return (
                        <li key={page.name}>
                            <Link to={page.path} >
                                {page.name}
                            </Link>
                        </li>
                    )
                })}
            </Links>
            <DarkSwitch />
        </HeaderWrapper>
    )
}