import React from 'react';
import { shallow } from 'enzyme';
import HotelImage from '../../components/Hotel/HotelImage/HotelImage';

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

describe('HotelImage component', () => {
  it('should render HotelImage component correctly', () => {
    const wrapper = shallow(
      <HotelImage image={app_data[0].image} onClick={() => {}} />,
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should call onClick', () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <HotelImage onClick={onClick} image={app_data[0].image} />,
    );
    wrapper.find('div').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
