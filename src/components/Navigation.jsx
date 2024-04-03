import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../contexts/LocaleContext";
import { FiLogOut } from "react-icons/fi";
import { SiGoogletranslate } from "react-icons/si";
import { FaMoon, FaSun } from "react-icons/fa";

function Navigation({ logout, name }) {
  return (
    <LocaleConsumer>
      {({ locale, toggleLocale, theme, toggleTheme }) => {
        return (
          <nav className="navigation">
            <ul>
              <li>
                <Link to="/archives">Arsip</Link>
              </li>
              <li>
                <button onClick={toggleTheme}>
                  {theme === "light" ? <FaMoon /> : <FaSun />}
                </button>
              </li>
              <li>
                <button onClick={toggleLocale}>
                  <SiGoogletranslate className="translate-icon" />
                </button>
              </li>
              <li>
                <button onClick={logout}>
                  <FiLogOut /> {name}
                </button>
              </li>
            </ul>
          </nav>
        );
      }}
    </LocaleConsumer>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
export default Navigation;
