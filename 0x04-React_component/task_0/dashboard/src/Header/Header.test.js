import Header from './Header';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

const wrapper = shallow(<Header />);

test('checkin crashing issue for Header', function () {
  shallow(<Header />);
});
test('checkin header', function () {
  expect(wrapper.find('header').exists()).toEqual(true);
});
test('checkin header h1 rendering', function () {
  expect(wrapper.find('header h1').exists()).toEqual(true);
});
test('checkin header img rendering', function () {
  expect(wrapper.find('header img').exists()).toEqual(true);
});
