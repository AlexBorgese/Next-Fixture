import React from 'react';
import { View } from 'react-native';

import SelectedTeamList from '../components/SelectedTeamList';
import AddTeamButton from '../components/AddTeamButton';

export default class TeamSelectionScreen extends React.Component {
	static navigationOptions = {
		header: null
	};

	render() {
		// pass selected team from higher order component into here
		return (
			<View>
				<SelectedTeamList />
				<AddTeamButton />
			</View>
		);
	}
}
