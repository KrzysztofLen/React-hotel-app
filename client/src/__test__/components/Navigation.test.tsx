import * as React from 'react';
import { shallow } from 'enzyme';
import Navigation, {
  SideMenuLink,
} from '../../components/Navigation/Navigation';

describe('[Component] Navigation', () => {
  it('should render Navigation component correctly', () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should render SideMenuLink component correctly', () => {
    const wrapper = shallow(<SideMenuLink to={'/'} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should render SideMenuLink component correctly with given props', () => {
    const wrapper = shallow(
      <SideMenuLink to={'/add'} activeOnlyWhenExact={true} />,
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
