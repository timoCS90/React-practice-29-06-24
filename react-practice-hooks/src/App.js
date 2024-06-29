import "./App.css";
import React from "react";
import CounterApp from "./counterApp";
import useDarkMode from "./useDarkMode";

function App() {
  const [theme, toggleTheme] = useDarkMode();

  // Theme button switch light and dark
  const themeButton = theme === "light" ? "Dark Mode" : "Light Mode";
  return (
    <div className="App">
      <button onClick={toggleTheme}>{themeButton}</button>
      <CounterApp />
    </div>
  );
}

export default App;
