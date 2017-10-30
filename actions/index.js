import readTextFile from 'read-text-file';

const key = readTextFile.readSync('../key.txt');

export const SET_TEAM = 'SET_TEAM';
export const GET_TEAM_INFORMATION = 'GET_TEAM_INFORMATION';
export const GET_LEAGUE_TEAMS = 'GET_LEAGUE_TEAMS';
export const ERROR = 'ERROR';

export function setTeam(teamName) {
	return {
		type: SET_TEAM,
		setTeam: teamName
	};
}

export function getTeamInformation(teamName) {
	return {
		type: GET_TEAM_INFORMATION,
		teamName
	};
}

export function getLeagueTeams(teams) {
	return {
		type: GET_LEAGUE_TEAMS,
		teams
	};
}

export function errorGettingTeams(bool) {
	return {
		type: ERROR,
		hasErrored: bool
	};
}

export function fetchLeagueTeams() {
	return (dispatch) => {
		fetch('http://api.football-data.org/v1/competitions/445/teams', {
			headers: {
				'X-Auth-Token': key
			}
		})
			.then((response) => {
				if (!response.ok) {
					throw Error(response.statusText);
				}

				return response;
			})
			.then((response) => response.json())
			.then((teams) => dispatch(getLeagueTeams(teams.teams)))
			.catch(() => dispatch(errorGettingTeams(true)));
	};
}
