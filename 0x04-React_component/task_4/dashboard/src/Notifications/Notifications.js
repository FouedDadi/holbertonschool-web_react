import React, { Component } from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import icon from '../assets/close-icon.png';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <>
        <div className='menuItem'>Your notifications</div>
        {displayDrawer && (
          <div className='Notifications'>
            {listNotifications.length > 0 ? (
              <>
                <p style={{ display: 'inline' }}>
                  Here is the list of notifications
                </p>
                <button
                  style={{ float: 'right' }}
                  aria-label='Close'
                  onClick={function () {
                    console.log('Close button has been clicked');
                  }}
                >
                  <img src={icon} alt='' style={{ height: '3vh' }} />
                </button>
                <ul>
                  {listNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={this.markAsRead}
                    />
                  ))}
                </ul>
              </>
            ) : (
              <p>No new notification for now</p>
            )}
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
