import React from 'react';
import {shallow} from 'enzyme';
import {CloudyIcon} from "./../../../components/Weather/CloudyIcon";

describe("Component: CloudyIcon", () => {
	test("should render CloudyIcon component correctly", () => {
		const wrapper = shallow(<CloudyIcon/>);
		expect(wrapper.debug()).toMatchSnapshot();
	});
});