//import liraries
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import styles from './styles';

import Color from '../../utility/colors'

// create a component
const ScreenContainer = (props) => {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor={Color.primaryLightColor}/>
            <SafeAreaView style={styles.whiteBackgroundContainer}>
                {props.children}
            </SafeAreaView>
        </>
    );
};
//make this component available to the app
export default ScreenContainer;
