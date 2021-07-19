import React from 'react'
import { useTheme } from '../../context/theme.context'

import style from './style.module.css'

export const LinkSocialMedia = ({ info }) => {
    const { isActive } = useTheme()
    const { title, body, Icon, link } = info

    return (
        <div className={style.container}>
            <a
                href={link}
                rel='referrer'
                target='_blank'>

                <Icon className={`${style.icon} ${isActive ? style.logoActive : ''}`} />
            </a>
            <div>
                <h5 className={style.title}>{title}:</h5>
                <span className={style.body}>{body}</span>
            </div>
        </div>
    )

}