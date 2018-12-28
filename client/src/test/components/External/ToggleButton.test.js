import React from 'react';
import {shallow} from 'enzyme';
import ToggleButton from '../../../components/External/ToggleButton/ToggleButton';

test('it should render ToggleButton component correctly', () => {
	const wrapper = shallow(<ToggleButton key={1} index={1} onClick={() => {}}/>);
	expect(wrapper).toMatchSnapshot();
});

test('it should render inside test with More', () => {
	const wrapper = shallow(<ToggleButton key={1} index={1} activeIndex={false}/>);
	expect(wrapper.text()).toEqual('More info');
	expect(wrapper).toMatchSnapshot();
});

test('it should render inside test with Less', () => {
	const wrapper = shallow(<ToggleButton key={1} index={1} activeIndex={true}/>);
	expect(wrapper.text()).toEqual('Less');
	expect(wrapper).toMatchSnapshot();
});

test('it should call onToggleButton on button click', () => {
	const onToggleButton = jest.fn();
	const wrapper = shallow(<ToggleButton onClick={onToggleButton}/>);
	wrapper.find('button').simulate('click');
	expect(onToggleButton).toHaveBeenCalled();
});

// test('it should change inside text after click', () => {
// 	const activeIndex = false;
// 	const onToggleButton = jest.fn();
// 	const wrapper = shallow(<ToggleButton onClick={onToggleButton} />);
// 	// expect(wrapper.props().activeIndex).toEqual(false);
// 	wrapper.find('button').simulate('click');
// 	// expect(wrapper.state().clicked).toEqual(true);
// 	// expect(wrapper.text()).toEqual('Less');
// 	expect(onToggleButton.calledOnce).toEqual(true);
// 	expect(wrapper).toMatchSnapshot();
// });