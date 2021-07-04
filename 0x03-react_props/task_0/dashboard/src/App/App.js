import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Notifications />
      <Header />
      <Login />
      <Footer />
    </Fragment>
  );
}

export default App;
