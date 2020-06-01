import React from 'react';
import PropTypez from 'prop-types';
import boardShape from '../../helpers/propz/boardShape';

import './Board.scss';


class Board extends React.Component {
  static propTypes = {
    board: boardShape.boardShape,
    setSingleBoard: PropTypez.func.isRequired,
    removeBoard: PropTypez.func.isRequired,
  }

  openSingleBoardEvent = (e) => {
    e.preventDefault();
    const { board, setSingleBoard } = this.props;
    setSingleBoard(board.id);
  }

  deleteBoardEvent = (e) => {
    e.preventDefault();
    const { board, removeBoard } = this.props;
    removeBoard(board.id);
  }

  editBoardEvent = (e) => {
    e.preventDefault();
    const { board, editABoard } = this.props;
    editABoard(board);
  }

  render() {
    const { board } = this.props;
    return (
      <div className="Board col-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{board.name}</h5>
            <p className="card-text">{board.description}</p>
            <button className="btn btn-primary" onClick={this.editBoardEvent}>Update dis Bawd</button>
            <button className="btn btn-success" onClick={this.openSingleBoardEvent}>View Pins</button>
            <button className="btn btn-warning" onClick={this.deleteBoardEvent}>Delete It Bro</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
