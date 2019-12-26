import React from 'react';
import { shallow } from 'enzyme';
import HotelLink from '../../components/Hotel/HotelLink/HotelLink';
import { shallowToJson } from 'enzyme-to-json';

const app_data = [
  {
    id: 0,
    name: 'Test Eva',
    hotel_name: 'Test Sunset Willow Resort',
    image: 'https://preview.ibb.co/ivpH07/alex_block_354270_unsplash.jpg',
    rate: 5,
    more_activities: true,
    activities_number: 6,
    commented: 5,
    peers: 46,
    discussions: 29,
    findings: 19,
    questions: 10,
    activity_level: 2,
  },
];

describe('[COMPONENT] HotelLink', () => {
  it('should render HotelLink correctly', () => {
    const wrapper = shallow(
      <HotelLink hotelName={app_data[0].hotel_name} id={app_data[0].id} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
