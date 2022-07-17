import { useState } from "preact/hooks";

type THEME = "light" | "dark";

const useDarkMode = () => {
  const [currentTheme, setCurrentTheme] = useState<THEME>("light");

  const toggleTheme = () => {
    const changedTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem("theme", changedTheme);
    setCurrentTheme(changedTheme);
  };

  return [currentTheme, toggleTheme];
};

export default useDarkMode;
