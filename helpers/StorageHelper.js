import { AsyncStorage } from 'react-native';

const listOfTeamsArray = [];

export const addTeam = async (team) => {
	const listOfTeams = [ ...listOfTeamsArray, team ];
	console.log(listOfTeams);
	await AsyncStorage.setItem('listOfTeams',
		JSON.stringify(listOfTeams));
};

export const updateTeamList = async () => {
	try {
		const value = await AsyncStorage.getItem('listOfTeams');
		if (value !== null) {
			return JSON.stringify(value);
		}
	} catch (error) {
		console.log('error retriving data');
	}
};
