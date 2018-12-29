import React from 'react';
import {shallow} from 'enzyme';
import HotelImage from '../../components/Hotel/HotelImage/HotelImage';
import app_data from '../fixtures/app_data';

test('it should render HotelImage component correctly', () => {
	const wrapper = shallow(<HotelImage  image={app_data[0].image}/>);
	expect(wrapper).toMatchSnapshot();
});

test('it should call onClick', () => {
	const onClick = jest.fn();
	const wrapper = shallow(<HotelImage onClick={onClick} image={app_data[0].image}/>);
	wrapper.find('div').simulate('click');
	expect(onClick).toHaveBeenCalled();
});