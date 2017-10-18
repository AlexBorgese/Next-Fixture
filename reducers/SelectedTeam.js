import { SET_TEAM } from '../actions/';

let cloneState = function (state) {
	return JSON.parse(JSON.stringify(state));
};
let newState = { selectedTeam: '' };

export default function (state, action) {
	switch (action.type) {
		case SET_TEAM:
			console.log('set team');
			newState = cloneState(state);
			newState.selectedTeam = action.setTeam;
			return newState;
		default:
			return state || newState;
	}
}
