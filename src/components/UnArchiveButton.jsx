import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { BsFileEarmarkArrowUp } from "react-icons/bs";
import { unarchiveNote } from "../utils/local-data";

function UnArchiveButton({ id }) {
  const navigate = useNavigate();
  const onUnArchiveHandler = () => {
    unarchiveNote(id);
    navigate("/");
  };
  return (
    <button
      className="action"
      type="button"
      title="Aktifkan"
      onClick={onUnArchiveHandler}
    >
      <BsFileEarmarkArrowUp />
    </button>
  );
}

UnArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default UnArchiveButton;
