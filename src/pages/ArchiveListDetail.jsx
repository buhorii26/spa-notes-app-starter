import React from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/network-data";
import PropTypes from "prop-types";
import ArchiveItemDetail from "../components/ArchiveItemDetail";

function ArchiveListDetailWrapper() {
  const { id } = useParams();
  return <ArchiveListDetail id={id} />;
}
class ArchiveListDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      archivedNotes: getNote(props.id),
    };
  }
  async componentDidMount() {
    const { id } = this.props;
    const { data } = await getNote(id);
    this.setState(() => {
      return {
         archivedNotes: data,
      };
    });
  }
  render() {
    if (this.state.archivedNotes === null) {
      return <p>Notes is not found!</p>;
    }

    return <ArchiveItemDetail {...this.state.archivedNotes} />;
  }
}

ArchiveListDetail.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ArchiveListDetailWrapper;
