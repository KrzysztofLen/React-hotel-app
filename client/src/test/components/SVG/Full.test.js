import React from 'react';
import {shallow} from 'enzyme';
import {Full} from "./../../../components/SVG/Full";

describe("Component: Full", () => {
	test("should render Full component correctly", () => {
		const wrapper = shallow(<Full/>);
		expect(wrapper.debug()).toMatchSnapshot();
	});

	test("should render Full with given props", () => {
		const wrapper = shallow(<Full width={10} height={20}/>);
		expect(wrapper.props().width).toBe(10);
		expect(wrapper.props().height).toBe(20);
	});
});