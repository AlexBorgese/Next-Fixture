import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/';

import { addTeam, updateTeamList } from '../helpers/StorageHelper';

function mapStateToProps(state) {
	return { selectedTeam: state.SelectedTeamReducers.selectedTeam };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

export class AddTeamButton extends React.Component {
	constructor() {
		super();
	}

	_returnTeams() {

	}

	render() {
		console.log(this.props);
		return (
			<View>
				<TextInput
					style={
						{ height: 40, borderColor: 'gray', borderWidth: 1 }
					}
					onChangeText={(teamName) => this.props.setTeam({ selectedTeam: teamName })}
				/>
				<Text>{ this.props.selectedTeam.selectedTeam}</Text>
			</View>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTeamButton);
