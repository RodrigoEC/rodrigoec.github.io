import styled from "styled-components";

export const Title = styled.h4`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 1rem;
`

export const ProjectCardWrapper = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    min-height: 280px;
    max-width: 420px;

    background-color: ${({ theme }) => theme.primary};
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.52);

    padding: 2rem;
    border: 4px solid;

    transition: .3s;

    &:hover {
        transform: scale(1.02);
        background-color: ${({ theme }) => theme.secondary};
    }

    * {
        transition: .3s;
    }

    &:hover * {
        color: ${({ theme }) => theme.primary};
    }

    @media screen and (max-width: 1025px) {
        max-width: 350px;
    }

    @media screen and (max-width: 550px) {
    
        ${Title}, p {
            text-align: center;
        }
    }
`

export const Devider = styled.div`
    border-bottom: 1px solid rgb(172, 172, 172);
    width: 90%;
    align-self: center;
    margin: 1rem 0rem;
`

export const Techs = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;

    li {
        font-size: 18px;
        font-weight: bold;
    }
`