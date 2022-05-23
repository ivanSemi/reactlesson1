import {createContext} from "react";

export const themes = {
    light: {
        background: '#eee',
        textColor: '#444'
    },
    dark: {
        background: '#444',
        textColor: '#eee'
    }
}

export const ThemeContext = createContext(themes.light);