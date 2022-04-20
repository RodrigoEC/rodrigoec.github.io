import React from 'react'
import { useTheme } from '../../context/theme.context'

import { LinkWrapper, Info, IconWrapper } from './styles'

export const LinkSocialMedia = ({ info }) => {
    const { isActive } = useTheme()
    const { title, body, Icon, link } = info

    return (
        <LinkWrapper isActive={isActive} >
            <IconWrapper href={link} rel='noreferrer' target='_blank'>
                <Icon/>
                <Info>
                    <h5>{title}:</h5>
                </Info>
            </IconWrapper>
            <span>{body}</span>
        </LinkWrapper>
    )

}