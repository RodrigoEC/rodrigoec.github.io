import React from 'react'
import { useTheme } from '../../context/theme.context'

import { DarkSwitchWrapper } from './styles'

export const DarkSwitch = () => {
    const { isActive, handleSwitch } = useTheme()

    return (
        <DarkSwitchWrapper isActive={isActive} onClick={handleSwitch}>
            <div></div>
        </DarkSwitchWrapper>
    )

}