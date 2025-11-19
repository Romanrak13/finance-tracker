"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }
  return context;
};

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as ThemeMode;
      return savedTheme || 'dark';
    }
    return 'dark';
  });


  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  };

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: {
              main: '#2563eb',
              light: '#60a5fa',
              dark: '#1d4ed8',
            },
            background: {
              default: '#ffffff',
              paper: '#f8fafc',
            },
            text: {
              primary: '#0f172a',
              secondary: '#64748b',
            },
          }
        : {
            primary: {
              main: '#38bdf8',
              light: '#7dd3fc',
              dark: '#0284c7',
            },
            background: {
              default: '#020617',
              paper: '#0f172a',
            },
            text: {
              primary: '#f8fafc',
              secondary: '#94a3b8',
            },
          }),
    },
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: mode === 'dark' ? 'rgba(15,23,42,0.98)' : 'rgba(248,250,252,0.98)',
            borderRight: mode === 'dark' ? '1px solid rgb(30 41 59)' : '1px solid rgb(226 232 240)',
          },
        },
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
