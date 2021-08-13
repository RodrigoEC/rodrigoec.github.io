import styled from "styled-components"

export const PageWrapper = styled.div`
    @media screen and (max-width: 550px) {
        h1, h2 {
            text-align: center;
        }
    }
`


export const WelcomeWrapper = styled.div`
    text-align: center;
    margin-bottom: 4rem;

    p {
        text-align: center;
    }
    @media screen and (max-width: 550px) {  
        h1 {
            margin-bottom: 1rem;
        }
    }
`

export const Text = styled.div`
    text-align: justify;

    span {
        font-weight: bold;
    }

`

export const InCollegeWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    width: 100%;

    ${Text} {
        width: 65%;
        max-width: 800px;
    }

    svg {
        width: 35%;
        max-width: 400px;
        height: fit-content;
    }

    @media screen and (max-width: 800px) {
        svg {
            align-self: center;
        }
    }

    @media screen and (max-width: 550px) {
        display: flex;
        flex-direction: column-reverse;

        ${Text} {
            width: 100%;
        }

        svg {
            margin: 2rem 0rem;
            width: 100%;
            height: 300px;
        }
    }

`

export const ExperiencesWrapper = styled.section`
    align-items: center;
    justify-content: space-evenly;
    display: flex;
    gap: 3rem;
    width: 100%;

    ${Text} {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 75%;
    }

    svg {
        width: 35%;
        max-width: 300px;
        height: fit-content;
    }

    @media screen and (max-width: 800px) {
        display: block;

        svg {
            display: none;
        }

        ${Text} {
            width: 100%;
        }
    }

    @media screen and (max-width: 550px) {
    
        ${Text} {
            display: block;
        }
    }
`

export const Programming = styled.div`
    display: flex;
    gap: 6rem;
    
    @media screen and (max-width: 550px) {
        display: block;

        h2 {
            margin-top: 2rem;
        }

        p {
            text-align: center;
        }
    }

`

export const ProjectsWrapper = styled.section`
    margin-top: 10rem;
    display: flex;
    flex-direction: column;

    ${Text} {
        width: 70%;
        margin-bottom: 4rem;
    }

    @media screen and (max-width: 1025px) {
        ${Text} {
            width: 100%;
        }
    }
    
    @media screen and (max-width: 800px) {
        margin-top: 5rem;
    }

`

export const Projects = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    justify-content: center;
    grid-template-columns: repeat(2fr);

    li {
        display: inline-block;
        width: fit-content;
    }
`
