import React from "react";
import ArchiveItem from "./ArchiveItem";
import PropTypes from "prop-types";
function ArchiveList({ notes }) {
  return (
    <section className="notes-list">
      {notes.length ? (
        notes.map((note) => (
          <ArchiveItem key={note.id} id={note.id} {...note} />
        ))
      ) : (
        <p className="notes-list-empty">Catatan Tidak Tersedia</p>
      )}
    </section>
  );
}

ArchiveList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ArchiveList;
