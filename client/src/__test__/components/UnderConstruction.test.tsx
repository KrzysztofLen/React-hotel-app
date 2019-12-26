import React from 'react';
import { shallow } from 'enzyme';
import UnderConstruction from '../../components/UnderConstruction/UnderConstruction';

describe('[COMPONENT] UnderConstruction', () => {
  it('should render UnderConstruction component correctly', () => {
    const wrapper = shallow(<UnderConstruction />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
