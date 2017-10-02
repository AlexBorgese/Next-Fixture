import React from 'react';
import { View, Button, TextInput, Text } from 'react-native';
import { addTeam, updateTeamList } from '../helpers/StorageHelper';

export default class AddTeamButton extends React.Component {
	constructor() {
		super();
		this.state = {
			teamName: '',
			teamList: []
		};
	}

	componentDidMount() {
		this.setInitialList();
	}

	addTeamToList(teamName) {
		console.log('adding team name', teamName);
		addTeam(teamName);
		this.setInitialList();
	}

	setInitialList() {
		this.setState({ teamList: updateTeamList() });
	}

	_returnTeams() {
		console.log('team list', this.state.teamList);
		return updateTeamList() || 'No teams added!';
	}

	render() {
		console.log(this.state.teamList);
		return (
			<View>
				<TextInput
					style={
						{ height: 40, borderColor: 'gray', borderWidth: 1 }
					}
					onSubmitEditing={(teamName) => this.addTeamToList(teamName)}
				/>
				<Text>{ this._returnTeams() }</Text>
			</View>
		);
	}
}
