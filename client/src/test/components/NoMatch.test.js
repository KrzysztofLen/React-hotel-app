import React from 'react';
import {shallow} from 'enzyme';
import NoMatch from '../../components/NoMatch/NoMatch';

test('should render UnderConstruction component correctly', () => {
	const wrapper = shallow(<NoMatch />);
	expect(wrapper.debug()).toMatchSnapshot();
});