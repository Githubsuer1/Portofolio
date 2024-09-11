import {useContext, createContext} from 'react'

const ThemeContext = createContext({
    dark:'true',
    setDark:()=>{},
})

export const useTheme = ()=>{
    return useContext(ThemeContext)
}

const ThemeProvider = ThemeContext.Provider
export default ThemeProvider;