import React from 'react';
import {shallow} from 'enzyme';
import {GooglePlus} from "../../../components/SVG/GooglePlus";

describe("Component: GooglePlus", () => {
	test("should render GooglePlus component correctly", () => {
		const wrapper = shallow(<GooglePlus/>);
		expect(wrapper.debug()).toMatchSnapshot();
	});

	test("should render GooglePlus with given props", () => {
		const wrapper = shallow(<GooglePlus width={10} height={20}/>);
		expect(wrapper.props().width).toBe(10);
		expect(wrapper.props().height).toBe(20);
	});
});