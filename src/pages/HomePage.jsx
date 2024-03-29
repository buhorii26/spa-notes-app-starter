import React from "react";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { getActiveNotes } from "../utils/local-data";

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
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || "",
    };
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
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
        <NoteList notes={notes} onDelete={this.onDeleteNoteHandler} />
        <div className="homepage__action">
          <Link to="/notes/add" className="action-link">
            <button className="action" type="button" title="Tambah">
              <FiPlus />
            </button>
          </Link>
        </div>
      </section>
    );
  }
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
};

export default HomePageWrapper;
