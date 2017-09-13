import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import RootNavigation from './src/navigation/RootNavigation';

export default class App extends React.Component {
	state = {
		assetsAreLoaded: false
	};

	render() {
		if (!this.state.assetsAreLoaded && !this.props.skipLoadingScreen) {
			return <AppLoading />;
		}
		return (
			<View style={styles.container}>
				{Platform.OS === 'ios' && <StatusBar barStyle="default" />}
				{Platform.OS === 'android' &&
					<View style={styles.statusBarUnderlay} />}
				<RootNavigation />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	statusBarUnderlay: {
		height: 24,
		backgroundColor: 'rgba(0,0,0,0.2)'
	}
});
