import React from 'react'

import { useTheme } from '../../context/theme.context'

import style from './style.module.css'

export const Post = ({ post }) => {
    const { isActive, theme } = useTheme()
    const { photo, alt, link } = post

    return (
        <a  
            href={link}
            rel='noreferrer'
            target='_blank'
            className={`${style.container} ${isActive ? style.active : ''}`}
            style={{
                'border-color': theme.border,
            }}> 

                <div className={style.cover}/>
                <img src={photo} alt={alt} />
        </a>
    )
}
