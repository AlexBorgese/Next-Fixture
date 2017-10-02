import React from 'react';
import { View } from 'react-native';

import MatchCalendar from '../components/MatchCalendar';

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		header: null
	};

	render() {
		return (
			<View style={{ backgroundColor: 'red' }}>
				<MatchCalendar />
			</View>
		);
	}
}
