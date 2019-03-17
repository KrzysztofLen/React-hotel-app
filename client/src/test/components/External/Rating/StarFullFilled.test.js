import React from 'react';
import {shallow} from 'enzyme';
import StarFullFilled from '../../../../components/External/Rating/StarFullFilled';

test('it should render star correctly', () => {
	const fillStar = "#BA265D";
	const wrapper = shallow(<StarFullFilled fill={fillStar}/>);
	expect(wrapper.debug()).toMatchSnapshot();
});