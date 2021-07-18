import React, { createContext, useContext, useState, useCallback } from 'react'

const colors = {
    black: '#282E31',
    black2: 'rgb(77 93 98 / 77%)',
    white: '#EFEFEF',
    'opaque-black': '#282E3131',
    'grayish-green': '#ffffff31',
    grey: '#d9d9d9',


}


const ThemeContext = createContext()
const themeLight = {
    border: colors.black2,
    switchBackground: colors.black,
    switch: colors.white,
    background: colors.white,
    title: colors.black,
    font: colors.black,
}

const themeDark = {
    border: colors['grayish-green'],
    switchBackground: colors.white,
    switch: colors.black,
    background: colors.black,
    title: colors.white,
    font: colors.grey,
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