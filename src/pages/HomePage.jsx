import React from "react";
import { useSearchParams } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { getActiveNotes, deleteNote } from "../utils/network-data";
import { LocaleConsumer } from "../contexts/LocaleContext";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });

  React.useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);
  async function onDeleteNoteHandler(id) {
    await deleteNote(id);
    const { data } = await getAllNotes();
    setNotes(data);
  }
  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <section className="homepage">
            <h2>{locale === "id" ? "Catatan Aktif" : "Active Note"}</h2>
            <SearchBar
              keyword={keyword}
              keywordChange={onKeywordChangeHandler}
            />
            <NoteList notes={filteredNotes} onDelete={onDeleteNoteHandler} />
            <div className="homepage__action">
              <Link to="/notes/add" className="action-link">
                <button className="action" type="button" title="Tambah">
                  <FiPlus />
                </button>
              </Link>
            </div>
          </section>
        );
      }}
    </LocaleConsumer>
  );
}

export default HomePage;
