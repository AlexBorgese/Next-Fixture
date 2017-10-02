import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

describe('Given a app component', () => {
	it('should render the loading screen', async () => {
		const component = shallow(<App />);

		expect(component).toMatchSnapshot();
	});

	it('should render the root without loading screen', async () => {
		const component = shallow(<App skipLoadingScreen />);

		expect(component).toMatchSnapshot();
	});
});
