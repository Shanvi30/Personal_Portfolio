import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const ThemeContext = createContext(null);

const THEME_KEY = "theme";
const THEMES = {
  dark: "dark",
  light: "light",
};

function applyThemeClass(theme) {
  const root = document.documentElement;
  if (theme === THEMES.dark) root.classList.add("dark");
  else root.classList.remove("dark");
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(THEMES.light);

  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY);
    const initial = saved === THEMES.dark ? THEMES.dark : THEMES.light;
    setTheme(initial);
    applyThemeClass(initial);
  }, []);

  useEffect(() => {
    applyThemeClass(theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      isDark: theme === THEMES.dark,
      setTheme,
      toggleTheme: () =>
        setTheme((t) => (t === THEMES.dark ? THEMES.light : THEMES.dark)),
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
