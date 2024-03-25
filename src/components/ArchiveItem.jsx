import React from "react";
import ArchiveItemContent from "./ArchiveItemContent";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function ArchiveItem({
  title,
  body,
  createdAt,
  id,
  onDelete,
  onArchive,
  isArchive,
}) {
  return (
    <div className="note-item">
      <ArchiveItemContent id={id} title={title} body={body} createdAt={createdAt} />
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id} onArchive={onArchive} isArchive={isArchive} />
      </div>
    </div>
  );
}

export default ArchiveItem;
