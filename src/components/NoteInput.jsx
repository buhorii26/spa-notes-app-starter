import React from "react";
import { BsCheckLg } from "react-icons/bs";
import PropTypes from "prop-types";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };
  }

  onTitleChangeEventHandler = (e) => {
    this.setState(() => ({
      title: e.target.value,
    }));
  };

  onBodyChangeEventHandler = (e) => {
    this.setState(() => ({
      body: e.target.value,
    }));
  };

  onSubmitEventHandler = (e) => {
    e.preventDefault();
    this.props.addNote(this.state);
  };

  render() {
    return (
      <>
        <div className="add-new-page__input">
          <input
            className="add-new-page__input__title"
            type="text"
            placeholder="Catatan Rahasia"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <input
            className="add-new-page__input__body"
            type="text"
            placeholder="Sebenarya saya adalah..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          />
        </div>
        <div className="add-new-page__action">
          <button
            className="action"
            type="submit"
            title="simpan"
            onClick={this.onSubmitEventHandler}
          >
            <BsCheckLg />
          </button>
        </div>
      </>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
}
export default NoteInput;
