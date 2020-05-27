import React from 'react';
import PropTypez from 'prop-types';
import './PinForm.scss';
import authData from '../../helpers/data/authData';

class PinForm extends React.Component {
  static propTypes = {
    boardId: PropTypez.string.isRequired,
    saveNewPin: PropTypez.func.isRequired,
  }

  state = {
    pinTitle: '',
    pinImageUrl: '',
  }

  titleChange = (e) => {
    e.preventDefault();
    this.setState({ pinTitle: e.target.value });
  }

  changeImage = (e) => {
    e.preventDefault();
    this.setState({ pinImageUrl: e.target.value });
  }

  savePin = (e) => {
    e.preventDefault();
    const { pinImageUrl, pinTitle } = this.state;
    const { boardId, saveNewPin } = this.props;
    const newPin = {
      boardId,
      imageUrl: pinImageUrl,
      title: pinTitle,
      uid: authData.getUid(),
    };
    saveNewPin(newPin);
  }

  render() {
    const { pinTitle, pinImageUrl } = this.state;

    return (
      <div className="PinForm">
         <form className="col-6 offset-3">
            <div className="form-group">
              <label htmlFor="pin-title">Title</label>
              <input
              type="text"
              className="form-control"
              id="pin-title"
              aria-describedby="emailHelp"
              placeholder="Enter Pin Title"
              value={pinTitle}
              onChange={this.titleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pin-image">Enter Pin Image Url</label>
              <input
              type="text"
              className="form-control"
              id="pin-image"
              placeholder="Slap in some URL"
              value={pinImageUrl}
              onChange={this.changeImage} />
            </div>
            <button className="btn btn-success" onClick={this.savePin}>Save Dis Board</button>
          </form>
      </div>
    );
  }
}

export default PinForm;
