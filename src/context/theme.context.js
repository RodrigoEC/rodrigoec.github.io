import React, { createContext, useContext, useState, useCallback, useEffect } from 'react'
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
        
        if (currentTheme === 'light') {
            setTheme(themes.dark)
            localStorage.setItem('@rodrigoec/theme', 'dark')
            localStorage.setItem('@rodrigoec/active', true)
            setIsActive(true)
        } else {
            setTheme(themes.light)
            localStorage.setItem('@rodrigoec/theme', 'light')
            localStorage.setItem('@rodrigoec/active', false)
            setIsActive(false)
        }

        
    }, [setTheme, setIsActive])
    
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