import React from "react";
import { LocaleConsumer } from "../contexts/LocaleContext";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeButton() {
  return (
    <LocaleConsumer>
      {({ theme, toggleTheme }) => {
        return (
            <button
              className="toggle-theme"
              onClick={toggleTheme}
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
        );
      }}
    </LocaleConsumer>
  );
}
export default ThemeButton;
