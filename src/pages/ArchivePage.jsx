import React from "react";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ArchiveList from "../components/ArchiveList";
import SearchBar from "../components/SearchBar";
import { getArchivedNotes } from "../utils/local-data";

function ArchivePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteNoteHandler(id) {
    const notes = this.state.notes.filter((notes) => notes.id !== id);
    this.setState({ notes });
  }
  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
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
  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });
    const archivedNotes = notes.filter((note) => {
      return note.archived === true;
    });
    return (
      <section className="archivepage">
        <h2>Catatan Arsip</h2>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <ArchiveList
          notes={archivedNotes}
          onDelete={this.onDeleteNoteHandler}
          onArchive={this.onArchiveHandler}
        />
        <div className="homepage__action">
          <button className="action" type="button" title="Tambah">
            <Link to="/add" className="action-link">
              <FaPlus />
            </Link>
          </button>
        </div>
      </section>
    );
  }
}

ArchivePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default ArchivePageWrapper;
