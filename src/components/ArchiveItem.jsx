import React from "react";
import ArchiveItemContent from "./ArchiveItemContent";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function ArchiveItem({
  title,
  body,
  createdAt,
  id,
}) {
  return (
    <div className="note-item">
      <ArchiveItemContent
        id={id}
        title={title}
        body={body}
        createdAt={createdAt}
      />
    </div>
  );
}

export default ArchiveItem;
