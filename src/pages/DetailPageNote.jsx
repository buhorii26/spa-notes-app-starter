import React from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/local-data";
import PropTypes from "prop-types";
import NoteItemDetail from "../components/NoteItemDetail";

function DetailPageNoteWrapper() {
  const { id } = useParams();
  return <DetailPageNote id={id} />;
}
class DetailPageNote extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          note: getNote(props.id),
        };
      }
      render() {
        if (this.state.movie === null) {
          return <p>Notes is not found!</p>;
        }
    
        return <NoteItemDetail {...this.state.note} />;
      }
}

DetailPageNote.propTypes = {
    id: PropTypes.number.isRequired,
  };
  
  export default DetailPageNoteWrapper;