import {createContext, useContext} from "react";
import {Theme, ThemeContextProps} from "../types/Theme";

export const ThemeContext = createContext<ThemeContextProps>({
    theme: Theme.LIGHT,
    isLight: true,
    isDark: false,
    setTheme: (theme) => {},
    toggleTheme: () => {},
})

export const useTheme = () => useContext(ThemeContext)