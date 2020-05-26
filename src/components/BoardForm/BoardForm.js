import React from 'react';
import PropTypez from 'prop-types';
import authData from '../../helpers/data/authData';

import './BoardForm.scss';

class BoardForm extends React.Component {
  static propTypes = {
    saveNewBoard: PropTypez.func.isRequired,
  }

  state = {
    boardName: '',
    boardDescription: '',
  }

  saveBoard = (e) => {
    e.preventDefault();
    const { boardName, boardDescription } = this.state;
    const newBoard = {
      description: boardDescription,
      name: boardName,
      uid: authData.getUid(),
    };
    this.props.saveNewBoard(newBoard);
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ boardDescription: e.target.value });
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ boardName: e.target.value });
  }

  render() {
    const { boardName, boardDescription } = this.state;
    return (
      <div className="BoardForm">
        <form className="col-6 offset-3">
            <div className="form-group">
              <label htmlFor="board-name">Name</label>
              <input
              type="text"
              className="form-control"
              id="board-name"
              aria-describedby="emailHelp"
              placeholder="Enter Board Name"
              value={boardName}
              onChange={this.nameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="board-description">Description</label>
              <input
              type="text"
              className="form-control"
              id="board-description"
              placeholder="Describe ya Board"
              value={boardDescription}
              onChange={this.descriptionChange} />
            </div>
            <button className="btn btn-success" onClick={this.saveBoard}>Save Dis Board</button>
          </form>
      </div>
    );
  }
}

export default BoardForm;
