import React from 'react';
import PropTypez from 'prop-types';
import './SingleBoard.scss';
import boardsData from '../../helpers/data/boardsData';
import pinsData from '../../helpers/data/pinsData';
import Pin from '../Pin/Pin';
import PinForm from '../PinForm/PinForm';

class SingleBoard extends React.Component {
  static propTypes = {
    boardId: PropTypez.string.isRequired,
    setSingleBoard: PropTypez.func.isRequired,
  }

  state = {
    board: {},
    pins: [],
    editPin: {},
    formOpen: false,
  }

  getInfo = () => {
    const { boardId } = this.props;

    boardsData.getSingleBoard(boardId)
      .then((request) => {
        const board = request.data;
        this.setState({ board });
        pinsData.getPinsByBoardId(boardId).then((pins) => {
          this.setState({ pins });
        });
      })
      .catch((err) => console.error('cound not get board', err));
  }

  componentDidMount() {
    this.getInfo();
  }

  removePin = (pinId) => {
    pinsData.deletePin(pinId)
      .then(() => this.getInfo())
      .catch((err) => console.error('failed detlete pin', err));
  }

  saveNewPin = (newPin) => {
    pinsData.savePin(newPin)
      .then(() => {
        this.getInfo();
        this.setState({ formOpen: false });
      })
      .catch((err) => console.error(err));
  }

  putPin = (pinId, updatedPin) => {
    pinsData.updatePin(pinId, updatedPin)
      .then(() => {
        this.getInfo();
        this.setState({ formOpen: false, editPin: {} });
      })
      .catch((err) => console.error('unable to update pin', err))
  }

  editAPin = (pin) => {
    this.setState({ editPin: pin, formOpen: true });
  }

  render() {
    const { setSingleBoard, boardId } = this.props;
    const {
      board,
      pins,
      formOpen,
      editPin,
    } = this.state;

    const makePins = pins.map((p) => <Pin key={p.id} pin={p} removePin={this.removePin} editAPin={this.editAPin}/>);

    return (
      <div className="SingleBoard">
        <button className="btn btn-danger" onClick={() => { setSingleBoard(''); }}>X</button>
        <h2>SingleBoard View</h2>
        <h2>{board.name} Board</h2>
        <p>{board.description}</p>
        <button className="btn btn-danger" onClick={() => this.setState({ formOpen: true })}>Make A Damn Pin</button>
        { formOpen ? <PinForm boardId={boardId} saveNewPin={this.saveNewPin} pin={editPin} putPin={this.putPin} /> : '' }
        <div className="d-flex flex-wrap">
          {makePins}
        </div>
      </div>
    );
  }
}

export default SingleBoard;
