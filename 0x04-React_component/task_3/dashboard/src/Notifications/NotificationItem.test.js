import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  it('renders a <NotificationItem /> component', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders a <NotificationItem /> component with type and value props', () => {
    const wrapper = shallow(<NotificationItem type='default' value='test' />);
    expect(wrapper.props()['data-notification-type']).toEqual('default');
    expect(wrapper.text()).toEqual('test');
    expect(wrapper.html()).toContain('<li data-notification-type="default"');
    expect(wrapper.html()).toContain('test</li>');
  });

  it('renders a <NotificationItem /> component with type and value props', () => {
    const wrapper = shallow(
      <NotificationItem html={{ __html: '<u>test</u>' }} />
    );
    expect(wrapper.html()).toContain('<u>test</u>');
  });
  it('checking if onclick the function is called with correct id', function () {
    const wrapper = shallow(<NotificationItem />);
    const spy = jest.fn();
    wrapper.setProps({ markAsRead: spy, id: 50 });
    wrapper.find('li').props().onClick();
    expect(spy).toBeCalledWith(50);
    spy.mockRestore();
  });
});
