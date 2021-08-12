import styled from 'styled-components'

export const DarkSwitchWrapper = styled.div`
    background-color: ${({ isActive }) => isActive ? 'var(--white)' : 'var(--black)'};
    transition: background-color .3s ease;

    display: flex;
    align-items: center;

    height: 2rem;
    width: 4rem;
    padding: 0rem .5rem;
    box-sizing: border-box;

    border-radius: 50px;
    cursor: pointer;

    div {
        background-color: ${({ isActive }) => isActive ? 'var(--black)' : 'var(--white)'};

        width: 1.25rem;
        height: 1.25rem;
        border-radius: 100%;

        transition: .3s ease;
        transition-property: transform background-color;
        ${({ isActive }) => isActive ? `transform: translate(1.75rem)` : ''};
    }

    @media screen and (max-width: 750px) {
        
        height: 1.5rem;
        width: 3rem;
        padding: 0rem .25rem;

        div {
            width: 1rem;
            height: 1rem;
            ${({ isActive }) => isActive ? `transform: translate(1.5rem)` : ''};

        }
    }
`;