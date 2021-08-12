import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    display: flex;

    align-items: center;
    justify-content: space-between;

    transition: .5s;

    padding: 0rem 3rem;

    height: 7rem;

    @media screen and (max-width: 1023px) { 
        justify-content: space-evenly;
    }

    @media screen and (max-width: 800px) {
        padding: 0rem;
        overflow: hidden;
        height: 5.5rem;
    }
`

export const Logo = styled.div`
    display: flex;
    font-weight: bold;
    letter-spacing: 4px;
    font-size: 24px;
    gap: 3rem;

    transition: .5s filter;
    ${({ isActive }) => isActive ? 'filter: invert(1)' : ''};
    
    svg {
        max-width: 220px;
    }

    @media screen and (max-width: 1023px) {
        display: none;
    }

`

export const Links = styled.ul`
    display: flex;
    font-weight: bold;
    letter-spacing: 4px;
    font-size: 24px;
    gap: 3rem;
    
    li {
        color: ${({ theme }) => theme.secondary};
        
        &:hover {
            text-decoration: underline;
        }
    }

    @media screen and (max-width: 750px) {
        letter-spacing: 1px;
        font-size: 14px;
        gap: 1rem;
    }


`