import React from 'react';
import { View } from 'react-native';

import Calendar from '../components/Calendar';

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		header: null
	};

	render() {
		return (
			<View style={{ backgroundColor: 'red' }}>
				<Calendar />
			</View>
		);
	}
}
