import React, { useEffect, useState } from 'react'

import style from './style.module.css'

export const ProgressBar = () => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        setProgress(60)
    }, [])

    return (
        <div className={style.container}>
            <div className={style.progressContainer}>
                <div 
                    className={style.progress}
                    style={{width: `${progress}%`}}
                    >
                </div>
            </div>
            <span className={style.number}>
                {progress}%
            </span>
        </div>
    )
}