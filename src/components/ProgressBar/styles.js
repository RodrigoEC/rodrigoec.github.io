import styled from 'styled-components'

export const ProgressBarWrapper = styled.div`
    position: relative;
    display: flex;
    gap: 1rem;
    align-items: center;

    span {
        font-weight: bold;
        font-size: 18px;
    }
`

export const ProgressBar = styled.div`
    width: 90%;
    height: 1.4rem;
    
    border-radius: 12px;

    background-color: white;
    box-shadow: 0px 0px 2px rgb(160, 160, 160);
    overflow: hidden;

    div {
        width: ${({ progress }) => progress}%;
        background-color: var(--red);
        height: inherit;
        border-radius: inherit;
        transition: width 1s ease-in-out;
    }
`