import styled from "styled-components"
import { Link as defaultLink } from 'react-router-dom'

export const ContactWrapper = styled.div`
    display: flex;

    section {
        width: 70%;
    }

    @media screen and (max-width: 1025px) {
        flex-direction: column-reverse;
        align-items: center;
        
        svg {
            width: 60%;
            height: fit-content;
            margin-bottom: 2rem;
        }

        section {
            width: 100%;
        }
    }

    @media screen and (max-width: 550px) {
        svg {
            width: 80%;
        }
    }
`

export const Text = styled.div`
    height: fit-content;
    p span {
        font-weight: bold;
    }

    @media screen and (max-width: 1025px) {
        text-align: center;
    }

`

export const Links = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 3rem 2rem;

    @media screen and (max-width: 550px) {
        margin: 3rem 0rem;
    }
`

export const Link = styled(defaultLink)`
    margin: 3rem 2rem;
    padding: 10px 20px;
    background-color: ${({ theme }) => theme['primary']};
    border: thin solid ${({ theme }) => theme['font']};
    transition: ease-out .3s;
    color: ${({ theme }) => theme['font']};
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme['primary']};
        background-color: ${({ theme }) => theme['font']};
    }
`