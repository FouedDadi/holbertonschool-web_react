import Notifications from './Notifications';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

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
