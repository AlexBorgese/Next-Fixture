import React from 'react';
import { View, Text } from 'react-native';

export default class ListItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { value } = this.props;

		return (
			<View>
				<Text>{ value }</Text>
			</View>
		);
	}
}

ListItem.displayName = 'ListItem';
