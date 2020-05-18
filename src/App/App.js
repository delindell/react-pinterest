import React from 'react';
import Auth from '../components/Auth/Auth';
import BoardContainer from '../components/BoardContainer/BoardContainer';
import MyNavBar from '../components/MyNavBar/MyNavBar';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Auth />
      <BoardContainer />
      <MyNavBar />
        <h2>Inside App Component</h2>
        <button className="btn btn-primary">I am a button</button>
      </div>
    );
  }
}

export default App;
