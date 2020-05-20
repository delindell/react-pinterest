import React from 'react';
import PropTypez from 'prop-types';
import './SingleBoard.scss';

class SingleBoard extends React.Component {
  static propTypes = {
    boardId: PropTypez.string.isRequired,
    setSingleBoard: PropTypez.func.isRequired,
  }

  render() {
    const { boardId, setSingleBoard } = this.props;
    return (
      <div className="SingleBoard">
        <button className="btn btn-danger" onClick={() => { setSingleBoard(''); }}>X</button>
        <h2>SingleBoard View</h2>
        <h3>{boardId}</h3>
      </div>
    );
  }
}

export default SingleBoard;
