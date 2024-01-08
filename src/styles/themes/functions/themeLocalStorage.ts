import {LOCAL_STORAGE_THEME_KEY} from "../constants";
import {Theme} from "../types/Theme";

export const setThemeLocalStorage = (theme: Theme) => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
}

export const getThemeLocalStorage = (): Theme => {
    const localTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
    const isCorrectTheme = localTheme === Theme.LIGHT || localTheme === Theme.DARK;

    if (isCorrectTheme) {
        return localTheme
    }

    return Theme.LIGHT
}