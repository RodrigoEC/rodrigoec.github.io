import React, { createContext, useContext, useState, useCallback } from 'react'

const ThemeContext = createContext()
const themeLight = {
    black: '#131610',
    white: '#EFEFEF'
}

const themeDark = {
    black: '#EFEFEF',
    white: '#131610'
}


export default function ThemeProvider({ children }) {
    const [isActive, setIsActive] = useState(false)
    const [theme, setTheme] = useState(themeLight)

    const handleSwitch = useCallback(() => {
        setTheme(theme === themeLight ? themeDark : themeLight)
        setIsActive(!isActive)
    })

    const value = {
        isActive,
        setIsActive,
        handleSwitch,
        theme,
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext);

    return { ...context };
}