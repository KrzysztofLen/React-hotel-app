import React from 'react';
import {shallow} from 'enzyme';
import {RainyIcon} from "../../../components/Weather/RainyIcon";

describe("Component: RainyIcon", () => {
	test("should render RainyIcon component correctly", () => {
		const wrapper = shallow(<RainyIcon/>);
		expect(wrapper.debug()).toMatchSnapshot();
	});
});