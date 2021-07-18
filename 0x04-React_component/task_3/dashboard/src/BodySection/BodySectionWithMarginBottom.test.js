import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

it('checking bodysection', function () {
  const wrapper = shallow(
    <BodySectionWithMarginBottom title='test title'>
      <p>test children node</p>
    </BodySectionWithMarginBottom>
  );
  expect(wrapper.find('.bodySectionWithMargin').exists()).toEqual(true);
  expect(wrapper.find('BodySection').props().title).toEqual('test title');
  expect(wrapper.find('p').text()).toEqual('test children node');
});
