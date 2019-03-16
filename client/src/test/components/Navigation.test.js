import React from 'react';
import {shallow} from 'enzyme';
import Navigation from "../../components/Navigation/Navigation";

test('should render Navigation component corectlly', () => {
	const wrapper = shallow(<Navigation/>);
	expect(wrapper).toMatchSnapshot();
});