import React from 'react';
import {shallow} from 'enzyme';
import {LogoutButton} from '../../../components/LoginSystem/LogoutButton';

test('should render LogoutButton correctly', () => {
	const wrapper = shallow(<LogoutButton/>);
	expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on click', () => {
	const startLogout = jest.fn();
	const wrapper = shallow(<LogoutButton startLogout={startLogout}/>);
	wrapper.find('button').simulate('click');
	expect(startLogout).toHaveBeenCalled();
});