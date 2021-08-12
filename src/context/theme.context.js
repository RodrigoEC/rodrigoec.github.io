import React, { createContext, useContext, useState, useCallback } from 'react'
import { ThemeProvider } from 'styled-components'


const colors = {
    black: '#282E31',
    blackOpaque: 'rgb(77 93 98 / 77%)',
    white: '#EFEFEF',
    'opaque-black': '#282E3131',
    'grayish-green': '#ffffff31',
    grey: '#d9d9d9',
}


const ThemeContext = createContext()

const themeDark = {
    primary: colors.black,
    secondary: colors.white,
    border: colors['grayish-green'],
    font: colors.grey
}

const themeLight = {
    primary: colors.white,
    secondary: colors.black,
    border: colors['opaque-black'],
    font: colors.black
}

export default function ThemesProvider({ children }) {
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
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext);

    return { ...context };
}