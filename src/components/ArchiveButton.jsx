import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { BsFileEarmarkArrowDown } from "react-icons/bs";
import { archiveNote } from "../utils/local-data";

function ArchiveButton({ id }) {
  const navigate = useNavigate();
  const onArchiveHandler = () => {
    archiveNote(id);
    navigate("/archives");
  };
  return (
    <button
      className="action"
      type="button"
      title="Arsipkan"
      onClick={onArchiveHandler}
    >
      <BsFileEarmarkArrowDown />
    </button>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ArchiveButton;
