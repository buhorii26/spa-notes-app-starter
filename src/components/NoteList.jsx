import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";
function NoteList({ notes, onDelete }) {
  return (
    <section className="notes-list">
      {notes.length ? (
        notes.map((note) => (
          <NoteItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
        ))
      ) : (
        <p className="notes-list-empty">Catatan Tidak Tersedia</p>
      )}
    </section>
  );
}

NoteList.proptTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
