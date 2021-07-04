import App from './App';
import { shallow } from 'enzyme';
import React from 'react';

test('checkin crashing issue', function () {
  shallow(<App />);
});
