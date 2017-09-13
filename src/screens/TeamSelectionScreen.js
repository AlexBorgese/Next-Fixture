import React from 'react';

import SelectedTeamList from '../components/SelectedTeamList';
import AddTeamButton from '../components/AddTeamButton';

const TeamSelectionScreen = () => {
	// pass selected team from higher order component into here
	return (
		<div className="team-selection-page">
			<SelectedTeamList />
			<AddTeamButton />
		</div>
	);
};

export default TeamSelectionScreen;
