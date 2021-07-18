import React from 'react'

import style from './style.module.css'

export const LinkSocialMedia = ({ info }) => {
    const { title, body, Icon, link } = info

    return (
        <div className={style.container}>
            <a
                href={link}
                rel='referrer'
                target='_blank'>

                <Icon className={style.icon} />
            </a>
            <div>
                <h5 className={style.title}>{title}:</h5>
                <span className={style.body}>{body}</span>
            </div>
        </div>
    )

}