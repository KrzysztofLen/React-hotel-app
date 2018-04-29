import React from 'react';
import {shallow} from 'enzyme';
import StarOutlined from '../../../../components/External/Rating/StarOutlined';

test('it should render empty star correctly', () => {
	const fillStar = "#BA265D";
	const wrapper = shallow(<StarOutlined fill={fillStar}/>);
	expect(wrapper).toMatchSnapshot();
});