//import liraries
import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomLinearGradient from '../LinearGradient/CustomLinearGradient';

import styles from './styles';

import Color from '../../utility/colors';

// create a component
const CustomButton = (props) => {

    const {text,onPress} = props;
    const buttonContainer = [styles.container,props.viewStyle];
    const textContainer = [styles.text,props.textStyle];

    const start = { x: 0, y: 0.5 }
    const end = { x: 1, y: 0.5 }
    const gradient = [Color.primaryDarkColor, Color.primaryLightColor]

    return (
        <CustomLinearGradient start={start} end={end} gradient={gradient} style={buttonContainer}>
            <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
                <Text style={textContainer}>{text}</Text>
            </TouchableOpacity>
        </CustomLinearGradient>
    );
};
//make this component available to the app
export default CustomButton;
