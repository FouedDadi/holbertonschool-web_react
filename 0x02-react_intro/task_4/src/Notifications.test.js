import Notifications from './Notifications';
import { shallow } from 'enzyme';
import React from 'react';

test('checking for Notifications rendering', () => {
  shallow(<Notifications />);
});
test('checking li rendering', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('li')).toHaveLength(3);
});
test('checking ul rendering', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('ul')).toHaveLength(1);
});
test('checking for Notifications message', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.text().includes('Here is the list of notifications')).toBe(
    true
  );
});
