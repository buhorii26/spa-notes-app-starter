import React from "react";
//import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
//import AddPage from "../pages/AddPage";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>
          <Link to="/">Aplikasi Catatan</Link>
        </h1>
        <Navigation />
      </header>
      <main>
        <HomePage />
      </main>
    </div>
  );
}

export default App;
