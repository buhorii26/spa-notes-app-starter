import React from "react";
import { useSearchParams } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { getAllNotes } from "../utils/local-data";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getAllNotes(),
      keyword: props.defaultKeyword || "",
    };
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }
  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });
    this.props.keywordChange(keyword);
  }

  onDeleteNoteHandler(id) {
    deleteNote(id);

    // update the contact state from data.js
    this.setState(() => {
      return {
        notes: getAllNotes(),
      };
    });
  }
  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }
  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id
        ? {
            ...note,
            archived: !note.archived,
          }
        : note
    );
    this.setState({ notes });
  }
  onSearch(title) {
    this.setState(() => {
      return {
        search: title,
      };
    });
  }
  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });
    return (
      <section className="homepage">
        <h2>Catatan Aktif</h2>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <NoteList
          notes={notes}
          onDelete={this.onDeleteNoteHandler}
          onArchive={this.onArchiveHandler}
        />
        <div className="homepage__action">
          <button className="action" type="button" title="Tambah">
            <Link to="/add">
              <FiPlus />
            </Link>
          </button>
        </div>
      </section>
    );
  }
}

export default HomePageWrapper;
