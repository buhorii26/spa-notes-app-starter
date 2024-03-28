import React from "react";
import NoteItemContent from "./NoteItemContent";

function NoteItem({ id, title, body, createdAt }) {
  return (
    <article className="note-item">
      <NoteItemContent
        id={id}
        title={title}
        body={body}
        createdAt={createdAt}
      />
    </article>
  );
}

export default NoteItem;
