import React from 'react'

import { useTheme } from '../../context/theme.context'

import { PostWrapper, Cover } from './styles'

export const Post = ({ post }) => {
    const { isActive, theme } = useTheme()
    const { photo, alt, link } = post

    return (
        <PostWrapper  
            href={link}
            rel='noreferrer'
            target='_blank'> 

                <Cover/>
                <img src={photo} alt={alt} />
        </PostWrapper>
    )
}
