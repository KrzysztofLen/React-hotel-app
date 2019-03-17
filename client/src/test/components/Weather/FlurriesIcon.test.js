import React from 'react';
import {shallow} from 'enzyme';
import {FlurriesIcon} from "./../../../components/Weather/FlurriesIcon";

describe("Component: FlurriesIcon", () => {
	test("should render FlurriesIcon component correctly", () => {
		const wrapper = shallow(<FlurriesIcon/>);
		expect(wrapper.debug()).toMatchSnapshot();
	});
});