import React from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import ArchivePage from "./pages/ArchivePage";
import DetailPageNoteWrapper from "./pages/DetailPageNote";
import ArchiveListDetailWrapper from "./pages/ArchiveListDetail";
import AddPage from "./pages/AddPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { getUserLogged, putAccessToken } from "./utils/network-data";
import { LocaleProvider } from "./contexts/LocaleContext";
import TranslateButton from "./components/TranslateButton";
import ThemeButton from "./components/ThemeButton";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      localeContext: {
        locale: localStorage.getItem("locale") || "id",
        toggleLocale: () => {
          this.setState((prevState) => {
            // mendapatkan nilai locale baru berdasarkan state sebelumnya
            const newLocale =
              prevState.localeContext.locale === "id" ? "en" : "id";
            // menyimpan nilai locale baru ke local storage
            localStorage.setItem("locale", newLocale);
            // mengembalikan dengan nilai locale terbaru.
            return {
              localeContext: {
                ...prevState.localeContext,
                locale: newLocale,
              },
            };
          });
        },
        theme: localStorage.getItem("theme") || "light",
        toggleTheme: () => {
          this.setState((prevState) => {
            // mendapatkan nilai tema baru berdasarkan state sebelumnya
            const newTheme =
              prevState.localeContext.theme === "light" ? "dark" : "light";
            // menyimpan nilai tema baru ke local storage
            localStorage.setItem("theme", newTheme);
            // mengembalikan dengan nilai theme terbaru.
            return {
              localeContext: {
                ...prevState.localeContext,
                theme: newTheme,
              },
            };
          });
        },
      },
    };
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.localeContext.theme) {
      document.documentElement.setAttribute(
        "data-theme",
        this.state.localeContext.theme
      );
    }
  }
  async componentDidMount() {
    document.documentElement.setAttribute(
      "data-theme",
      this.state.localeContext.theme
    );
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      };
    });
  }
  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }
  onLogout() {
    this.setState(() => {
      return {
        authedUser: null,
      };
    });

    putAccessToken("");
  }
  render() {
    if (this.state.initializing) {
      return null;
    }
    if (this.state.authedUser === null) {
      return (
        <LocaleProvider value={this.state.localeContext}>
          <div className="app-container">
            <header className=".note-app__header">
              <Link to="/">
                <h1>
                  {this.state.localeContext.locale === "id"
                    ? "Aplikasi Catatan"
                    : "Notes App"}
                </h1>
              </Link>
              <nav className="navigation">
                <ul>
                  <li>
                    <TranslateButton />
                  </li>
                  <li>
                    <ThemeButton />
                  </li>
                </ul>
              </nav>
            </header>
            <main>
              <Routes>
                <Route
                  path="/*"
                  element={<LoginPage loginSuccess={this.onLoginSuccess} />}
                />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </main>
          </div>
        </LocaleProvider>
      );
    }
    return (
      <LocaleProvider value={this.state.localeContext}>
        <div className="app-container">
          <header className=".note-app__header">
            <Link to="/">
              <h1>
                {this.state.localeContext.locale === "id"
                  ? "Aplikasi Catatan"
                  : "Notes App"}
              </h1>
            </Link>
            <Navigation
              logout={this.onLogout}
              name={this.state.authedUser.name}
            />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/notes/:id" element={<DetailPageNoteWrapper />} />
              <Route path="/notes/add" element={<AddPage />} />
              <Route path="/archives" element={<ArchivePage />} />
              <Route
                path="/archives/:id"
                element={<ArchiveListDetailWrapper />}
              />
            </Routes>
          </main>
        </div>
      </LocaleProvider>
    );
  }
}

export default App;
