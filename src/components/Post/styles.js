import styled from 'styled-components'

export const PostWrapper = styled.a`
    position: relative;
    display: flex;
    justify-content: center;
    padding: 8px;
    box-sizing: border-box;
    
    border: 3px solid ${({ theme }) => theme.border};
    transition: padding .5s;

    &::before {
        margin-top: 1rem;
        height: 80%;
        width: 110%;
    }

    &::after {
        width: 70%;
        height: 110%;
        transform: translateY(-11px);
    }

    &::before, &::after {
        background-color: ${({ theme }) => theme.primary};
        position: absolute;
        z-index: 1;
        transition: .5s;
        content: '';
    }

    &:hover {
        padding: 2px;

    }

    &:hover::before, &:hover::after {
        width: 0px

    }


    img {
        z-index: 2;
        width: 100%;
    }

    @media screen and (max-width: 550px) {
        width: 90px;
        padding: 3px;
        border: 1px solid;

        &::before {
            margin-top: .5rem;
        }
    }
`

export const Cover = styled.div`
    position: absolute;
    z-index: 10;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.308);
    width: 92%;
    height: 93%;
    
    transition: opacity .5s;
    
    &:hover {
        opacity: 0;
    }
    @media screen and (max-width: 550px) {
        width: 95%;
        height: 92%;

        &::before {
            width: 120%;
        }

        &::after {
            height: 120%;
        }
    }
`