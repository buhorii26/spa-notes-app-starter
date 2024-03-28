import React from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePageWrapper from "./pages/HomePage";
import DetailPageNoteWrapper from "./pages/DetailPageNote";
import ArchiveListDetailWrapper from "./pages/ArchiveListDetail";
import ArchivePageWrapper from "./pages/ArchivePage";
import AddPage from "./pages/AddPage";

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
        <Routes>
          <Route path="/" element={<HomePageWrapper />} />
          <Route path="/archives" element={<ArchivePageWrapper />} />
          <Route path="/archives/:id" element={<ArchiveListDetailWrapper />} />
          <Route path="/notes/:id" element={<DetailPageNoteWrapper />} />
          <Route path="/notes/add" element={<AddPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
