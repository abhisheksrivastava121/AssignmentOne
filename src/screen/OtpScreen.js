//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';

// create a component
const OtpScreen = () => {
    return (
        <ScreenContainer>
            <View style={styles.container}>
                <Text>OtpScreen</Text>
            </View>
        </ScreenContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default OtpScreen;
