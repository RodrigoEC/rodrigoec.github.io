import styled from 'styled-components'

export const LinkWrapper = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;

    a {
        ${({ isActive }) => isActive ? 'filter: invert(1)' : ''};
    }
`

export const Info = styled.div`
    display: inherit;
    gap: .5rem;

    h5 {
        font-size: 18px;
        font-weight: bold;

        @media screen and (max-width: 550px) {
            font-size: 14px;
        }
    }
`