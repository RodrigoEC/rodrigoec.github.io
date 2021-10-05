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

const themes = {
    light: themeLight,
    dark: themeDark,
} 

export default function ThemesProvider({ children }) {
    const getTheme = () => {
        let theme = localStorage.getItem('@rodrigoec/theme')
        if (!theme) {
            localStorage.setItem('@rodrigoec/theme', 'light')
            theme = 'light'
        }
        return theme
    }

    const getIsActive = useCallback(() => {
        const isActive = localStorage.getItem('@rodrigoec/active')
        if (!isActive) {
            localStorage.setItem('@rodrigoec/active', false)
            return false
        }

        return isActive === 'true'
    },[])

    const currentTheme = getTheme()
    const isCurrentlyActive = getIsActive()

    const [isActive, setIsActive] = useState(isCurrentlyActive)
    const [theme, setTheme] = useState(themes[currentTheme])
    
    const handleSwitch = useCallback(() => {
        const currentTheme = getTheme()
        const isCurrentlyActive = getIsActive()

        const nextTheme = currentTheme === 'light' ? 'dark' : 'light'

        localStorage.setItem('@rodrigoec/active', !isCurrentlyActive)
        localStorage.setItem('@rodrigoec/theme', nextTheme)
        setIsActive(!isCurrentlyActive)
        setTheme(themes[nextTheme])
        
    }, [setTheme, setIsActive, getIsActive])
    
    const value = {
        isActive,
        setIsActive,
        handleSwitch,
        theme,
    }

    return theme  && (
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