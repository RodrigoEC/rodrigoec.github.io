import styled from "styled-components"

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