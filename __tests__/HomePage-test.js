import ReactNative from 'react-native';
import React from 'react';
import HomeScreen from '../src/screens/HomeScreen';
import { shallow } from 'enzyme';

describe('Given a HomeScreen component', () => {
	it('should render the correct snapshot', () => {
		const component = shallow(<HomeScreen />);

		expect(component).toMatchSnapshot();
	});
});
