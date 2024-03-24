import React from "react";
class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: "",
      body: "",
      limit: 50,
    };
    //binding
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }
  onTitleChangeEventHandler = (e) => {
    if (this.state.limit >= 0 && e.target.value.length <= 50) {
      this.setState(() => ({
        title: e.target.value,
        limit: 50 - e.target.value.length,
      }));
    }
  };
  onBodyChangeEventHandler = (e) => {
    this.setState(() => ({
      body: e.target.value,
    }));
  };
  onSubmitEventHandler = (e) => {
    e.preventDefault();
    this.props.addNote(this.state);
    this.setState(() => ({
      title: "",
      body: "",
      limit: 50,
    }));
  };
  render() {
    return (
      <div className="note-input">
        <h2 className="note-input__title">Buat Catatan</h2>
        <p className="note-input__title__char-limit">
          Sisa Karakter: {this.state.limit}
        </p>
        <form className="note-input__body" onSubmit={this.onSubmitEventHandler}>
          <input
            type="text"
            placeholder="Ini adalah judul..."
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
            required
          />
          <textarea
            placeholder="Tuliskan catatanmu disini..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
            required
          ></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
