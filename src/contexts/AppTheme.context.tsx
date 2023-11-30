// src/ThemeContext.tsx

import React, { createContext, useContext, useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider, Theme, createTheme } from '@mui/material/styles';

const ThemeContext = createContext<Theme | undefined>(undefined);

export const useThemeContext = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }

    return context;
};

type AppThemeProviderProps = {
    children: React.ReactNode;
};

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
    const theme = useMemo(() => {
        return createTheme({
            palette: {
                primary: {
                    main: '#222222',
                },
                secondary: {
                    main: '#e83e8c',
                },
                success: {
                    main: '#e83e8c'
                }
            },
            typography: {
                fontFamily: 'Roboto, sans-serif',
                fontSize: 16,
            },

        });
    }, []);

    if (!theme) {
        throw new Error('AppTheme must return a valid Theme object');
    }

    return (
        <MuiThemeProvider theme={theme}>
            <ThemeContext.Provider value={theme}>
                {children}
            </ThemeContext.Provider>
        </MuiThemeProvider>
    );
};
