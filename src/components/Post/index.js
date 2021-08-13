import React from 'react'

import { PostWrapper, Cover } from './styles'

export const Post = ({ post }) => {
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
