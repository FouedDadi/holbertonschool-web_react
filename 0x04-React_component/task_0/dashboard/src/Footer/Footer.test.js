import Footer from './Footer';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

const wrapper = shallow(<Footer />);

test('checkin crashing issue for Footer', function () {
  shallow(<Footer />);
});
test('checkin Footer rendering', function () {
  expect(wrapper.find('footer').exists()).toEqual(true);
});
test('checkin Footer rendering "copyright"', function () {
  expect(wrapper.find('footer').find('p').text()).toContain('Copyright');
});
