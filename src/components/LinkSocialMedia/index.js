import React from 'react'
import { useTheme } from '../../context/theme.context'

import { LinkWrapper, Info } from './styles'

export const LinkSocialMedia = ({ info }) => {
    const { isActive } = useTheme()
    const { title, body, Icon, link } = info

    return (
        <LinkWrapper isActive={isActive} >
            <a href={link} rel='noreferrer' target='_blank'>
                <Icon/>
            </a>
            <Info>
                <h5>{title}:</h5>
                <span>{body}</span>
            </Info>
        </LinkWrapper>
    )

}