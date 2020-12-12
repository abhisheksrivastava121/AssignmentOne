//import liraries
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import styles from './styles';

// create a component
const ScreenContainer = (props) => {
    return (
        <>
            <StatusBar barStyle="light-content"/>
            <SafeAreaView style={styles.whiteBackgroundContainer}>
                {props.children}
            </SafeAreaView>
        </>
    );
};
//make this component available to the app
export default ScreenContainer;
