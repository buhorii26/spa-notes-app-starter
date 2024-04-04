import React from "react";
import { LocaleConsumer } from "../contexts/LocaleContext";
import { SiGoogletranslate } from "react-icons/si";

function TranslateButton() {
  return (
    <LocaleConsumer>
      {({ toggleLocale }) => {
        return (
            <button className="toggle-locale" type="button"  onClick={toggleLocale}>
              <SiGoogletranslate className="translate-icon" />
            </button>
        );
      }}
    </LocaleConsumer>
  );
}
export default TranslateButton;
