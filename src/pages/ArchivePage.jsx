import React from "react";
import { useSearchParams } from "react-router-dom";
import ArchiveList from "../components/ArchiveList";
import { getArchivedNotes, deleteNote } from "../utils/network-data";
import SearchBar from "../components/SearchBar";
import { LocaleConsumer } from "../contexts/LocaleContext";

function ArchivePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [archivedNotes, setArchivedNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });
  React.useEffect(() => {
    getArchivedNotes().then(({ data }) => {
      setArchivedNotes(data);
    });
  }, []);
  async function onDeleteNoteHandler(id) {
    await deleteNote(id);
    const { data } = await getAllNotes();
    setArchivedNotes(data);
  }
  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }
  const filteredNotes = archivedNotes.filter((archivedNote) => {
    return archivedNote.title.toLowerCase().includes(keyword.toLowerCase());
  });
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <section className="homepage">
            <h2>{locale === "id" ? "Catatan Arsip" : "Archived Note"}</h2>
            <SearchBar
              keyword={keyword}
              keywordChange={onKeywordChangeHandler}
            />
            <ArchiveList notes={filteredNotes} onDelete={onDeleteNoteHandler} />
          </section>
        );
      }}
    </LocaleConsumer>
  );
}

export default ArchivePage;
