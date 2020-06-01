import React from 'react';
import PropTypez from 'prop-types';
import './Pin.scss';
import pinShape from '../../helpers/propz/pinShape';

class Pin extends React.Component {
  static propTypes = {
    pin: pinShape.pinShape,
    removePin: PropTypez.func.isRequired,
  }

  deletePinEvent = (e) => {
    e.preventDefault();
    const { pin, removePin } = this.props;
    removePin(pin.id);
  }

  editPinEvent = (e) => {
    e.preventDefault();
    const { pin, editAPin } = this.props;
    editAPin(pin);
  }

  render() {
    const { pin } = this.props;

    return (
      <div className="Pin col-3">
        <div className="card">
        <img className="card-img-top" src={pin.imageUrl} alt="pin" />
        <div className="card-body">
          <h5 className="card-title">{pin.title}</h5>
          <button className="btn btn-warning" onClick={this.deletePinEvent}>Delete It Bro</button>
          <button className="btn btn-warning" onClick={this.editPinEvent}>Edit It Bro</button>
        </div>
      </div>
      </div>
    );
  }
}

export default Pin;
