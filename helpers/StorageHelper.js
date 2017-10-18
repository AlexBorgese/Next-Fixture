import { AsyncStorage } from 'react-native';
import React from 'react';

import ListItem from '../components/ListItem';

const listOfTasksArray = [];

export const addTeam = async (team) => {
	listOfTasksArray.push(team);

	await AsyncStorage.setItem('listOfTasks',
		JSON.stringify(listOfTasksArray));
};

export const updateTeamList = () => {
	AsyncStorage.getAllKeys((err, keys) => {
		AsyncStorage.multiGet(keys, (err, stores) => {
			stores.map((result, i, store) => {
			// get at each store's key/value so you can work with it
				let value = store[i][1];
				console.log('value', value);
				console.log('result', result[0]);
				return <ListItem value={ value } />;
			});
		});
	});
};
