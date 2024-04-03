import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils/index";
import DeleteButton from "./DeleteButton";
import UnArchiveButton from "./UnArchiveButton";

function ArchiveItemDetail({ id, title, createdAt, body }) {
  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <div className="detail-page__body">{body}</div>
      <div className="detail-page__action">
        <UnArchiveButton id={id}/>
        <DeleteButton id={id}/>
      </div>
    </section>
  );
}

ArchiveItemDetail.propTypes = {
  id:PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default ArchiveItemDetail;
