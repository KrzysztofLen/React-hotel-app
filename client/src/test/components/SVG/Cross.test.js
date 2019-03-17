import React from 'react';
import {shallow} from 'enzyme';
import {Cross} from "./../../../components/SVG/Cross";

describe("Component: Cross", () => {
	test("should render Cross component correctly", () => {
		const wrapper = shallow(<Cross/>);
		expect(wrapper.debug()).toMatchSnapshot();
	});

	test("should render Cross with given props", () => {
		const wrapper = shallow(<Cross width={10} height={20}/>);
		expect(wrapper.props().width).toBe(10);
		expect(wrapper.props().height).toBe(20);
	});
});