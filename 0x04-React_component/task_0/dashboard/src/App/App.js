import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Fragment, Component } from 'react';
import React from 'react';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Notifications />
        <Header />
        <Login />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
