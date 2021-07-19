import React from 'react'
import { useTheme } from '../../context/theme.context'

import style from './style.module.css'

export const DarkSwitch = () => {
    const { isActive, theme, handleSwitch } = useTheme()

    return (
        <div 
            className={`${style.container} ${ isActive ? style.active : ''}`}
            onClick={handleSwitch}
            style={{backgroundColor: theme.switchBackground}}
            >
            <div
                className={`${style.switch}`}
                style={{backgroundColor: theme.switch}}
            ></div>
        </div>
    )

}