import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import OTPVerify from '../screen/OTPVerify';
import OtpScreen from "../screen/OtpScreen"

const index = () => {
    return (
        <Stack.Navigator initialRouteName="OTP">   
            <Stack.Screen name="OTP" component={OtpScreen} options={{headerShown:false}}/>
            <Stack.Screen name="OTPVerify" component={OTPVerify} options={{headerShown:false}}/>
        </Stack.Navigator>
    );
}

export default index;

