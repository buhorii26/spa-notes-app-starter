import React from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/network-data";
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
      notes: getNote(props.id),
    };
  }
  async componentDidMount() {
    const { id } = this.props;
    const { data } = await getNote(id);
    this.setState(() => {
      return {
        notes: data,
      };
    });
  }
  render() {
    if (this.state.notes === null) {
      return <p>Notes is not found!</p>;
    }

    return <NoteItemDetail {...this.state.notes} />;
  }
}

DetailPageNote.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DetailPageNoteWrapper;
