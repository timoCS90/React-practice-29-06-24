import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    document.body.className = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, toggleTheme];
};

export default useDarkMode;
