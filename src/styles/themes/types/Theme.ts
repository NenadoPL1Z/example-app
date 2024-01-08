export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

export type ThemeSetNewTheme = (newTheme: Theme) => void

export interface ThemeContextProps {
    theme: Theme;
    isLight: boolean;
    isDark: boolean;
    setTheme: ThemeSetNewTheme;
    toggleTheme: () => void;
}