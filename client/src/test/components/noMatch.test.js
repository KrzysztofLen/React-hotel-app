import React from 'react';
import {shallow} from 'enzyme';
import NoMatch from '../../components/NoMatch/NoMatch';

test('should render NoMatch component correctly', () => {
	const wrapper = shallow(<NoMatch />);
	expect(wrapper.debug()).toMatchSnapshot();
});