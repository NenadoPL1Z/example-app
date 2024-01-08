import {Theme, ThemeSetNewTheme} from "../../types/Theme";
import {useState} from "react";
import {getThemeLocalStorage, setThemeLocalStorage} from "../../functions/themeLocalStorage";

export const useThemeProvider = () => {
    const [theme, setTheme] = useState<Theme>(getThemeLocalStorage());

    const isLight = theme === Theme.LIGHT;
    const isDark = theme === Theme.DARK;

    const handleSetTheme: ThemeSetNewTheme = (newTheme: Theme) => {
        setTheme(newTheme)
        setThemeLocalStorage(newTheme);
    }

    const handleToggleTheme = () => {
        if (isLight) handleSetTheme(Theme.DARK);
        if (isDark) handleSetTheme(Theme.LIGHT);
    }

    return {
        theme,

        isLight,
        isDark,

        handleSetTheme,
        handleToggleTheme
    };
};