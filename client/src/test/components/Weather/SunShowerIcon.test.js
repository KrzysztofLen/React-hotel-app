import React from 'react';
import {shallow} from 'enzyme';
import {SunShowerIcon} from "../../../components/Weather/SunShowerIcon";

describe("Component: SunShowerIcon", () => {
	test("should render SunShowerIcon component correctly", () => {
		const wrapper = shallow(<SunShowerIcon/>);
		expect(wrapper.debug()).toMatchSnapshot();
	});
});