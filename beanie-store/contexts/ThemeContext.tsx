import { useInteropClassName } from 'expo-router/build/link/useLinkHooks';
import {createContext} from 'react'

type Theme = 'orange' | 'green';

interface ThemeContextProps {
    theme: string;
    setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
    theme: 'orange',
    setTheme: () => {},
});

export default ThemeContext;