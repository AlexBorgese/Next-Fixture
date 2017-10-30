import React from 'react';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions/';

function mapStateToProps(state) {
	return { selectedTeam: state.selectedTeam };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

export class TeamInformation extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<View>
				<Text style={{ fontSize: 20, textAlign: 'center', left: 0, right: 0, top: 0, bottom: 0 }}>{ this.props.selectedTeam}</Text>
			</View>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamInformation);
