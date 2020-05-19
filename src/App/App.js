import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import fbConnection from '../helpers/data/connection';

import Auth from '../components/Auth/Auth';
import BoardContainer from '../components/BoardContainer/BoardContainer';
import MyNavBar from '../components/MyNavBar/MyNavBar';

import './App.scss';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }


  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const loadComponent = () => {
      const { authed } = this.state;
      let componentToLoad = '';
      if (authed) {
        componentToLoad = <BoardContainer />;
      } else {
        componentToLoad = <Auth />;
      }
      return componentToLoad;
    };

    return (
      <div className="App">
        <h2>React Pinterest</h2>
        <MyNavBar />
        {loadComponent()}
      </div>
    );
  }
}

export default App;
