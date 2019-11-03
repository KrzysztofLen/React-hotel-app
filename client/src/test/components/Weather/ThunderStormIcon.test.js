import React from 'react';
import {shallow} from 'enzyme';
import {ThunderStormIcon} from "../../../components/Weather/ThunderStormIcon";

describe("Component: ThunderStormIcon", () => {
	test("should render ThunderStormIcon component correctly", () => {
		const wrapper = shallow(<ThunderStormIcon/>);
		expect(wrapper.debug()).toMatchSnapshot();
	});
});