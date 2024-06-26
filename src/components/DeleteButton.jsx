import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { deleteNote } from "../utils/network-data";
import { BsTrash3 } from "react-icons/bs";

function DeleteButton({ id }) {
  const navigate = useNavigate();
  const deleteHandler = () => {
    deleteNote(id);
    navigate("/");
  };
  return (
    <button
      className="action"
      type="button"
      title="Hapus"
      onClick={deleteHandler}
    >
      <BsTrash3 />
    </button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string,
};

export default DeleteButton;
