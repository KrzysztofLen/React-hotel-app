import React from 'react';
import { shallow } from 'enzyme';
import { Logo } from '../../components/Logo/Logo';

test('should render Logo correctly', () => {
  const wrapper = shallow(<Logo />);
  expect(wrapper.debug()).toMatchSnapshot();
});
