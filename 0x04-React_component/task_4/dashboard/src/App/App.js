import React, { Component } from 'react';
import '../App/App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];
const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: getLatestNotification() },
];
class App extends Component {
  componentDidMount() {
    document.addEventListener('keydown', function (event) {
      if (event.ctrlKey && event.keyCode === 72) {
        alert('Logging you out');
        this.props.logOut();
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', function (event) {
      if (event.ctrlKey && event.keyCode === 72) {
        alert('Logging you out');
        this.props.logOut();
      }
    });
  }
  render() {
    const listNotifications = this.listNotifications;
    const { isLoggedIn } = this.props;
    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className='App'>
          <Header />
          <hr />
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title='Course list'>
              <CourseList listCourses={listCourses}></CourseList>
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title='Log in to continue'>
              <Login></Login>
            </BodySectionWithMarginBottom>
          )}
          <BodySection title='News from the School'>
            <p>whatever</p>
          </BodySection>
          <hr />
          <Footer />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => void 0,
};

export default App;
