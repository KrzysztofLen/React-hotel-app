import React from 'react';
import {shallow} from 'enzyme';
import * as axios from "axios";
import Weather from "./../../../components/Weather/Weather";

describe("Component: Weather", () => {
	test("should render Weather component corectlly", () => {
		const wrapper = shallow(<Weather/>);
		expect(wrapper.debug()).toMatchSnapshot();
	});

	test.skip("should fetch data from openweathermap with given values", () => {
		const geo = {
			lat: 50,
			lng: 50
		};
		const response = jest.fn(getWeather(geo));
		console.log(response);
		//expect(response).toHaveBeenCalled();
	});
});
