import React from 'react';
import {shallow} from 'enzyme';
import {SunnyIcon} from "../../../components/Weather/SunnyIcon";

describe("Component: SunnyIcon", () => {
	test("should render Sunny component correctly", () => {
		const wrapper = shallow(<SunnyIcon/>);
		expect(wrapper.debug()).toMatchSnapshot();
	});
});