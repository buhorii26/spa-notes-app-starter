import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../contexts/LocaleContext";
import { FiLogOut } from "react-icons/fi";
import TranslateButton from "./TranslateButton";
import ThemeButton from "./ThemeButton";

function Navigation({ logout, name }) {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <nav className="navigation">
            <ul>
              <li>
                <Link to="/archives">
                  {locale === "id" ? "Terarsip" : "Archived"}
                </Link>
              </li>
              <li>
                <TranslateButton />
              </li>
              <li>
                  <ThemeButton />
              </li>
              <li>
                <button className="toggle-locale" onClick={logout}>
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
