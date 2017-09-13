import React from 'react';
import { View, Image } from 'react-native';

const Calendar = () => {
	return (
		<View>
			<Image source={ require('../assets/images/calendar.png') } />
		</View>
	);
};

Calendar.displayName = 'Calendar';

export default Calendar;
