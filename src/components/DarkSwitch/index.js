import React from 'react'
import { useTheme } from '../../context/theme.context'

import style from './style.module.css'

export const DarkSwitch = () => {
    const { isActive, theme, handleSwitch } = useTheme()

    return (
        <div 
            className={`${style.container} ${ isActive ? style.active : ''}`}
            onClick={handleSwitch}
            style={{'background-color': theme.switchBackground}}
            >
            <div
                className={`${style.switch}`}
                style={{'background-color': theme.switch}}
            ></div>
        </div>
    )

}