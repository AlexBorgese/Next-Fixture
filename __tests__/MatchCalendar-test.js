import React from 'react';
import { shallow } from 'enzyme';

import MatchCalendar from '../components/MatchCalendar';

describe('Given the MatchCalendar component', () => {
	let component;
	describe('when rendered', () => {
		beforeAll(() => component = shallow(<MatchCalendar />));

		it('should render the correct snapshot', () => {
			expect(component).toMatchSnapshot();
		});
	});
});
