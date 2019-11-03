import React from 'react';
import {shallow} from 'enzyme';
import Slider from '../../../../components/External/Slider/Slider';

describe("Component: Slider", () => {
	test("it should render Slider component correctly", () => {
		const wrapper = shallow(<Slider images={["1", "2"]}/>);
		expect(wrapper).toMatchSnapshot();
	});

	test("it should return false if no images provided", () => {
		const wrapper = shallow(<Slider images={null}/>);
		expect(wrapper).toMatchSnapshot();
	});

	test("it should increment state onNext", () => {
		const wrapper = shallow(<Slider images={["1", "2"]}/>);
		wrapper.setState({currentIndex: 2});
		wrapper.instance().onNext();
		wrapper.update();
		expect(wrapper.state("currentIndex")).toBe(3);
	});

	test("it should decrement state onPrev", () => {
		const wrapper = shallow(<Slider images={["1", "2"]}/>);
		wrapper.setState({currentIndex: 2});
		wrapper.instance().onPrev();
		wrapper.update();
		expect(wrapper.state("currentIndex")).toBe(1);
	});
});