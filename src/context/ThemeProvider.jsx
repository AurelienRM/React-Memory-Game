import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({ theme: 'light' });

const LOCAL_STORAGE_THEME_KEY = 'color-scheme';

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const isDark = theme === 'dark';
  const isLight = theme === 'light';

  useEffect(() => {
    const savedColorScheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);

    if (savedColorScheme) {
      setTheme(savedColorScheme);
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleMediaQueryChange = () => {
      setTheme(mediaQuery.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    handleMediaQueryChange();

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  const toggleTheme = () =>
    setTheme((prevTheme) => {
      const NewTheme = prevTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, NewTheme);
      return NewTheme;
    });

  const values = {
    theme,
    isDark,
    isLight,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  return context;
};
