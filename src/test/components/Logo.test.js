import React from 'react';
import {shallow} from 'enzyme';
import {Logo} from '../../js/Logo';

test('should render Logo correctly', () => {
	const wrapper = shallow(<Logo/>);
	expect(wrapper).toMatchSnapshot();
});
