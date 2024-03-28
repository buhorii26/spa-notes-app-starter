import React from "react";
import { showFormattedDate } from "../utils/index";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import DeleteButton from "./DeleteButton";
import UnArchiveButton from "./UnArchiveButton";
function ArchiveItemContent({ id, title, createdAt, body }) {
  return (
    <div className="note-item__content">
      <h2 className="note-item__title">
        <Link to={`/archives/${id}`}>{title}</Link>
      </h2>
      <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{body}</p>
      <div className="detail-page__action">
        <DeleteButton id={id} />
        <UnArchiveButton id={id} />
      </div>
    </div>
  );
}

ArchiveItemContent.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default ArchiveItemContent;
