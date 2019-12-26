import React from 'react';
import { shallow } from 'enzyme';
import { Slider } from '../../components/Slider/Slider';

describe('[Component] Slider', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<Slider images={['1', '2', '3']} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render Slider component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should return undefined if no images provided', () => {
    const wrapper = shallow(<Slider images={[]} />);
    expect(wrapper.prop('imageSrc')).toBeUndefined();
  });

  it('should return correct image prop with default state', () => {
    expect(wrapper.props().imageSrc).toEqual('2');
  });

  //   it('should increment state onNext', () => {
  //     const onNext = jest.fn();
  //     wrapper.onClick();
  //     expect(setState).toHaveBeenCalledWith(1);
  //   });

  //   it('should decrement state onPrev', () => {
  //     const wrapper = shallow(<Slider images={['1', '2']} />);
  //     wrapper.setState({ currentIndex: 2 });
  //     wrapper.instance().onPrev();
  //     wrapper.update();
  //     expect(wrapper.state('currentIndex')).toBe(1);
  //   });
});
