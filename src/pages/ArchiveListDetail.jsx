import React from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/local-data";
import PropTypes from "prop-types";
import ArchiveItemContent from "../components/ArchiveItemContent";

function ArchiveListDetailWrapper() {
  const { id } = useParams();
  return <ArchiveListDetail id={id} />;
}
class ArchiveListDetail extends React.Component {
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
    
        return <ArchiveItemContent {...this.state.note} />;
      }
}

ArchiveListDetail.propTypes = {
    id: PropTypes.number.isRequired,
  };
  
  export default ArchiveListDetailWrapper;