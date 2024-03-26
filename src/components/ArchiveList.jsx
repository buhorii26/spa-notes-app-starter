import React from "react";
import ArchiveItem from "./ArchiveItem";
import PropTypes from "prop-types";
function ArchiveList({ notes, onDelete, onArchive }) {
  return (
    <section className="notes-list">
      {notes.length ? (
        notes.map((note) => (
          <ArchiveItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            isArchive={note.archived}
            {...note}
          />
        ))
      ) : (
        <p className="notes-list-empty">Arsip Tidak Tersedia</p>
      )}
    </section>
  );
}

ArchiveList.proptTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ArchiveList;
