import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils/index";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NoteItemDetail({ id, title, createdAt, body }) {
  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <div className="detail-page__body">{body}</div>
      <div className="detail-page__action">
        <ArchiveButton id={id}/>
        <DeleteButton id={id}/>
      </div>
    </section>
  );
}

NoteItemDetail.propTypes = {
  id:PropTypes.string,
  title: PropTypes.string,
  createdAt: PropTypes.string,
  body: PropTypes.string,
};

export default NoteItemDetail;
