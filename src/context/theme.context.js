import React, { createContext, useContext, useState, useCallback } from 'react'

const colors = {
    black: '#131610',
    white: '#EFEFEF',
    'opaque-black': '#00000031',
    'grayish-green': '#ffffff31',

}


const ThemeContext = createContext()
const themeLight = {
    border: colors['opaque-black'],
    switchBackground: colors.black,
    switch: colors.white,
    background: colors.white,
    font: colors.black,
}

const themeDark = {
    border: colors['grayish-green'],
    switchBackground: colors.white,
    switch: colors.black,
    background: colors.black,
    font: colors.white,

}


export default function ThemeProvider({ children }) {
    const [isActive, setIsActive] = useState(false)
    const [theme, setTheme] = useState(themeLight)

    const handleSwitch = useCallback(() => {
        setTheme(theme === themeLight ? themeDark : themeLight)
        setIsActive(!isActive)
    }, [setTheme, setIsActive, isActive, theme])

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