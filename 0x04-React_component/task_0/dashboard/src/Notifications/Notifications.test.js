import Notifications from './Notifications';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import NotificationItem from './NotificationItem';

configure({ adapter: new Adapter() });

test('checking for Notifications rendering', () => {
  shallow(<Notifications />);
});
test('checking NotificationItem to have length of 3', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('NotificationItem')).toHaveLength(3);
});
test('checking the first NotificationItem to render right html', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('NotificationItem').first().html()).toEqual(
    '<li data-notification-type="default">New course available</li>'
  );
});
