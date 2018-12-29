import React from 'react';
import {shallow} from 'enzyme';
import {Header} from '../../components/Header++DELETE/Header';

test('should render Header++DELETE correctly', () => {
	const wrapper = shallow(<Header/>);
	expect(wrapper).toMatchSnapshot();
});