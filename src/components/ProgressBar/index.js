import React, { useEffect, useState } from 'react'

import { ProgressBarWrapper, ProgressBar as Progressing } from './styles'

export const ProgressBar = () => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        setProgress(60)
    }, [])

    return (
        <ProgressBarWrapper >
            <Progressing progress={progress}> <div></div> </Progressing>
            <span>{progress}%</span>
        </ProgressBarWrapper>
    )
}