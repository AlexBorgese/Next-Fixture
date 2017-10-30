import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import ModalDropdown from 'react-native-modal-dropdown';

import { fetchLeagueTeams, setTeam } from '../actions/';

function mapStateToProps(state) {
	return {
		selectedTeam: state.selectedTeam,
		teamInformation: state.teamInformation
	};
}

function mapDispatchToProps(dispatch) {
	return {
		fetchData: () => dispatch(fetchLeagueTeams()),
		setTeam: (teamName) => dispatch(setTeam(teamName))
	};
}

class AddTeamButton extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchData();
	}

	render() {
		const teamNames = this.props.teamInformation;
		const result = teamNames.map(team => team.name);

		return (
			<View>
				<ModalDropdown
					options={ result }
					onSelect={(index, value) => this.props.setTeam(value) }
					style={{ left: 0, right: 0 }} />
			</View>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTeamButton);
