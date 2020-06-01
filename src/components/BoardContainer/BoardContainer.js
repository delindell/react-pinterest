import React from 'react';
import PropTypez from 'prop-types';

import './BoardContainer.scss';
import boardsData from '../../helpers/data/boardsData';
import authData from '../../helpers/data/authData';

import Board from '../Board/Board';
import smash from '../../helpers/data/smash';
import BoardForm from '../BoardForm/BoardForm';

class BoardContainer extends React.Component {
  static propTypes = {
    setSingleBoard: PropTypez.func.isRequired,
  }

  state = {
    boards: [],
    formOpen: false,
    editBoard: {},
  }

  getAllBoards = () => {
    boardsData.getBoardsByUid(authData.getUid())
      .then((boards) => this.setState({ boards }))
      .catch((err) => console.error('unable to get boards', err));
  }

  componentDidMount() {
    this.getAllBoards();
  }

  removeBoard = (boardId) => {
    smash.completelyRemoveBoard(boardId)
      .then(() => this.getAllBoards())
      .catch((err) => console.error('coulndt delete full board', err));
  }

  saveNewBoard = (newBoard) => {
    boardsData.saveBoard(newBoard)
      .then(() => {
        this.getAllBoards();
        this.setState({ formOpen: false });
      })
      .catch((err) => console.error('cound not get boards', err));
  }

  putBoard = (boardId, updatedBoard) => {
    boardsData.updateBoard(boardId, updatedBoard)
      .then(() => {
        this.getAllBoards();
        this.setState({ formOpen: false, editBoard: {} });
      })
      .catch((err) => console.error('unable to update board', err));
  }

  editABoard = (board) => {
    this.setState({ formOpen: true, editBoard: board });
  }

  render() {
    const { boards, formOpen, editBoard } = this.state;
    const { setSingleBoard } = this.props;
    const makeBoards = boards.map((board) => <Board key={board.id} editABoard={this.editABoard} board={board} setSingleBoard={setSingleBoard} removeBoard={this.removeBoard} />);

    return (
      <div className="BoardContainer">
        <h2>Boards</h2>
        <button className="btn btn-warning" onClick={() => this.setState({ formOpen: true })}>Make A Damn Barwd</button>
        { formOpen ? <BoardForm saveNewBoard={this.saveNewBoard} board={editBoard} putBoard={this.putBoard}/> : '' }
        <div className="d-flex flex-wrap">
          {makeBoards}
        </div>
      </div>
    );
  }
}

export default BoardContainer;
