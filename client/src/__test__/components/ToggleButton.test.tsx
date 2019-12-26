import React from 'react';
import { shallow } from 'enzyme';
import { ToggleButton } from '../../components/ToggleButton/ToggleButton';

describe('[COMPONENT] ToggleButton', () => {
  it('should render ToggleButton component correctly', () => {
    const wrapper = shallow(
      <ToggleButton index={1} isOpen={true} onClick={() => {}} btnClass={''} />,
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should render inside test with More', () => {
    const wrapper = shallow(
      <ToggleButton
        index={1}
        isOpen={false}
        onClick={() => {}}
        btnClass={''}
      />,
    );
    expect(wrapper.text()).toEqual('More info');
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should render inside test with Less', () => {
    const wrapper = shallow(
      <ToggleButton index={1} isOpen={true} onClick={() => {}} btnClass={''} />,
    );
    expect(wrapper.text()).toEqual('Less');
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('it call onToggleButton on button click', () => {
    const onToggleButton = jest.fn();
    const wrapper = shallow(
      <ToggleButton
        index={1}
        onClick={onToggleButton}
        isOpen={false}
        btnClass={''}
      />,
    );
    wrapper.find('button').simulate('click');
    expect(onToggleButton).toHaveBeenCalled();
  });
});
