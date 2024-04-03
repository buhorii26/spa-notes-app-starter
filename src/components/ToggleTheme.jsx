import { LocaleConsumer } from '../contexts/LocaleContext';
import { FaMoon, FaSun } from "react-icons/fa";

function ToggleTheme() {
  return (
    <LocaleConsumer>
      {({ theme, toggleTheme }) => {
        return <button onClick={toggleTheme}>{theme === 'light' ? <FaMoon /> : <FaSun />}</button>;
      }}
    </LocaleConsumer>
  );
}
 
export default ToggleTheme;