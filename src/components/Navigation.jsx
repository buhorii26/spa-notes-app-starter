import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../contexts/LocaleContext";
import { FiLogOut } from "react-icons/fi";

function Navigation({ logout, name }) {
  return (
    <LocaleConsumer>
      {({ locale, toggleLocale }) => {
        return (
          <nav className="navigation">
            <ul>
              <li>
                <Link to="/archives">Arsip</Link>
              </li>
              <li>
                <button onClick={toggleLocale}>
                  {locale === "id" ? "en" : "id"}
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
