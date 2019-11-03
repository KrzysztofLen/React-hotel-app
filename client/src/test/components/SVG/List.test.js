import React from 'react';
import {shallow} from 'enzyme';
import {List} from "../../../components/SVG/List";

describe("Component: List", () => {
	test("should render List component correctly", () => {
		const wrapper = shallow(<List/>);
		expect(wrapper.debug()).toMatchSnapshot();
	});

	test("should render List with given props", () => {
		const wrapper = shallow(<List width={10} height={20}/>);
		expect(wrapper.props().width).toBe(10);
		expect(wrapper.props().height).toBe(20);
	});
});