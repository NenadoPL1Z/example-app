import React, {useMemo} from 'react';
import {ThemeContext} from "../ThemeContext";
import {ThemeContextProps} from "../../types/Theme";
import {useThemeProvider} from "./useThemeProvider";

type ThemeProviderProps = {
    children: React.ReactNode
}

const ThemeProvider = ({children}: ThemeProviderProps) => {
    const {
        theme,
        isDark,
        isLight,
        handleSetTheme,
        handleToggleTheme
    } = useThemeProvider();

    const value: ThemeContextProps = useMemo(() => (
        {
            theme,
            isLight,
            isDark,
            setTheme: handleSetTheme,
            toggleTheme: handleToggleTheme
        }
    ), [theme])

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;