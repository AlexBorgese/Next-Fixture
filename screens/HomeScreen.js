import React from 'react';
import { View, Text } from 'react-native';

import AddTeamSelection from '../components/AddTeamSelection';
import TeamInformation from '../components/TeamInformation';

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		header: null
	};

	render() {
		return (
			<View style={ style }>
				<Text style={{ fontSize: 40, right: 0, left: 0, textAlign: 'center' }}>Next Fixture</Text>
				<AddTeamSelection />
				<TeamInformation />
			</View>
		);
	}
}

const style = {
	backgroundColor: '#ffffcc',
	height: '100%'
};
