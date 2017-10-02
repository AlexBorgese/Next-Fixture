import React from 'react';
import { View, Text } from 'react-native';

export default class MatchCalendar extends React.Component {
	render() {
		console.log('calendar');
		return (
			<View>
				<Text>Next Fixture</Text>
			</View>
		);
	}
}

MatchCalendar.displayName = 'MatchCalendar';
