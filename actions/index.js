export const SET_TEAM = 'SET_TEAM';

export function setTeam(teamName) {
	return {
		type: SET_TEAM,
		setTeam: teamName
	};
}
