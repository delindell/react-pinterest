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

  render() {
    const { boards, formOpen } = this.state;
    const { setSingleBoard } = this.props;
    const makeBoards = boards.map((board) => <Board key={board.id} board={board} setSingleBoard={setSingleBoard} removeBoard={this.removeBoard} />);

    return (
      <div className="BoardContainer">
        <h2>Boards</h2>
        <button className="btn btn-warning" onClick={() => this.setState({ formOpen: true })}>Make A Damn Barwd</button>
        { formOpen ? <BoardForm /> : '' }
        <div className="d-flex flex-wrap">
          {makeBoards}
        </div>
      </div>
    );
  }
}

export default BoardContainer;
