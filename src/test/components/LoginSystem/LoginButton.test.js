import React from 'react';
import {shallow} from 'enzyme';
import {LoginButton} from '../../../js/LoginSystem/LoginButton';

test('should render LoginButton correctly', () => {
	const wrapper = shallow(<LoginButton/>);
	expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on click', () => {
	const startLogin = jest.fn();
	const wrapper = shallow(<LoginButton startLogin={startLogin}/>);
	wrapper.find('button').simulate('click');
	expect(startLogin).toHaveBeenCalled();
});