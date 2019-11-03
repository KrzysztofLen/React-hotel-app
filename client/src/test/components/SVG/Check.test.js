import React from 'react';
import {shallow} from 'enzyme';
import {Check} from "../../../components/SVG/Check";

describe("Component: Check", () => {
	test("should render Check component correctly", () => {
		const wrapper = shallow(<Check/>);
		expect(wrapper.debug()).toMatchSnapshot();
	});

	test("should render Check with given props", () => {
		const wrapper = shallow(<Check width={10} height={20}/>);
		expect(wrapper.props().width).toBe(10);
		expect(wrapper.props().height).toBe(20);
	});
});