import React from "react";
import ArchiveItemContent from "./ArchiveItemContent";
import PropTypes from "prop-types";

function ArchiveItem({
  id,
  title,
  createdAt,
  body,
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

ArchiveItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
export default ArchiveItem;
