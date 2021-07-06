import NotificationItem from './NotificationItem';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

test('checking for NotificationItem rendering', () => {
  shallow(<NotificationItem />);
});
test('checking for value and type rendering', () => {
  const wrapper = shallow(<NotificationItem type='default' value='test' />);
  expect(wrapper.find('li')).toHaveLength(1);
  expect(wrapper.find('li').text()).toEqual('test');
  expect(wrapper.find('li').prop('data-notification-type')).toEqual('default');
});
test('checking for html prop rendering', () => {
  const wrapper = shallow(
    <NotificationItem html={{ __html: '<u>test</u>' }} />
  );
  expect(wrapper.find('li').html()).toEqual('<li><u>test</u></li>');
});
