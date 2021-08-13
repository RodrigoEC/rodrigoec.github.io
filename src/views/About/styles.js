import styled from "styled-components";

export const AboutMeWrapper = styled.section`
    display: flex;
    gap: 4rem;
    align-items: center;
    
    @media screen and (max-width: 1025px) {
        margin: 0;
        flex-direction: column;
        text-align: center;

        p {
            text-align: justify;
        }
    }

`

export const Profile = styled.a`
    width: 40%;

    img {
        border-radius: 100%;
    }

    @media screen and (max-width: 1025px) {
        width: fit-content;
        max-width: 100%;

        img {
            width: 90%;
        }
    }

`

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media screen and (max-width: 1025px) {
        margin-bottom: 4rem;
        text-align: justify;
        justify-items: center;
    }
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;

    h2 {
        font-weight: bold;
        font-size: 32px;
        margin-bottom: 0;
    }
    
    @media screen and (max-width: 1025px) {
        margin: 0 auto;
        h2 {
            text-align: justify;
        }
    }

    @media screen and (max-width: 800px) {
        h2 {
            font-size: 24px;
        }
    }

`

export const Posts = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;

    li {
        max-width: 200px;
    }
`

export const LoveWrapper = styled.section`
    display: flex;

    ${Text}, ${Posts} {
        width: 50%;
    }

    @media screen and (max-width: 1025px) {
        flex-direction: column;
        text-align: center;

        p {
            text-align: justify;
        }

        ${Text}, ${Posts} {
            width: 100%;
        }
    }
`
