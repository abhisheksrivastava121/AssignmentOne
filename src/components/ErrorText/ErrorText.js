import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const ErrorText = (props) => {
    return (
        <View style={styles.container}>
            <Text style={{...styles.errorText,...props.style}}>{props.message}</Text>
        </View>
    );
}
export default ErrorText;
