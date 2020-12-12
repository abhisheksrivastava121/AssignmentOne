import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import 'react-native-gesture-handler';

import RootStack from './src/navigation/index';

export default function App() {
	return (
		<NavigationContainer>
			<RootStack />
		</NavigationContainer>
	);
}