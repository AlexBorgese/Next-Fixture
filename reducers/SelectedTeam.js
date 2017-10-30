import { SET_TEAM, GET_LEAGUE_TEAMS } from '../actions/';

const cloneState = function (state) {
	return Object.assign({}, state);
};

let newState = { selectedTeam: '', teamInformation: [] };

// CHANGE TO USE ACTION INSTEAD OF RANDOM METHOD
// USE THUNK
export default function (state, action) {
	switch (action.type) {
		case SET_TEAM:
			console.log('set team');
			newState = cloneState(state);
			newState.selectedTeam = action.setTeam; // like this
			return newState;
		case GET_LEAGUE_TEAMS:
			newState = cloneState(state);
			newState.teamInformation = action.teams;
			return newState;
		default:
			return state || newState;
	}
}
