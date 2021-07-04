import App from './App';
import { shallow } from 'enzyme';
import React from 'react';

const wrapper = shallow(<App />);

test('checkin crashing issue', function () {
  shallow(<App />);
});
