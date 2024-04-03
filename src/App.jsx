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
            return {
              localeContext: {
                ...prevState.localeContext,
                locale: prevState.localeContext.locale === "id" ? "en" : "id",
              },
            };
          });
        },
        theme: "light",
        toggleTheme: () => {
          this.setState((prevState) => {
            return {
              theme: prevState.theme === "light" ? "dark" : "light",
            };
          });
        },
      },
    };
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }
  async componentDidMount() {
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
            <header>
              <h1>
                <Link to="/">
                  <h1>Aplikasi Catatan</h1>
                </Link>
              </h1>
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
