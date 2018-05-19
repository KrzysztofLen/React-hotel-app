import React from 'react';
import {shallow} from 'enzyme';
import HotelLink from '../../components/HotelLink/HotelLink';
import app_data from '../fixtures/app_data';

test('should render Hotel Link correctly', () => {
	const wrapper = shallow(<HotelLink hotelName={app_data[0].hotel_name} id={app_data[0].id} />);
	expect(wrapper).toMatchSnapshot();
});