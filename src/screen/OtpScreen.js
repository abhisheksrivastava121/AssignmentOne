//import liraries
import React, { useState } from 'react';
import { View, Text,Keyboard, Image} from 'react-native';
import CustomLinearGradient from '../components/LinearGradient/CustomLinearGradient';

import styles from './styles';

import Color from '../utility/colors';
import {mobileValidationFunction} from '../utility/commonValidation';
import * as Helper from '../utility/helper';
import Constant from '../utility/constants';

import CustomButton from '../components/Button/CustomButton';
import ScreenContainer from '../components/container/ScreenContainer';
import CustomTextInput from '../components/CustomTextInput/CustomTextInput';
import ErrorText from '../components/ErrorText/ErrorText';
import Header from '../components/header/header';

// create a component
const OtpScreen = (props) => {

    const [mobile,setMobile] = useState('');
    const [mobileErr,setMobileErr] = useState('');
    
    const handleButtonPress = async() => {
        Keyboard.dismiss();
        let status = false;
        console.log(mobile);
        if(mobile.length > 10) {
            setMobile(mobile.slice(mobile.length));
        }
        if (mobile === "") {
            status = true;
            setMobileErr("Please provide your mobile number");
        } else if (!mobileValidationFunction(mobile)) {
            status = true;
            setMobileErr("Please check your mobile number before proceeding1")
        } else if (mobile.length !== 10) {
            status = true;
            setMobileErr("Please check your mobile number before proceeding2")
        }
        if (!status) {
            let otp = Math.floor(1000 + Math.random() * 9000);
            let url = Constant.API_KEY +"/SMS/"+mobile+"/"+otp
            try {
                const response = await Helper.get_req(url);
                if(response.status ===200) {
                    props.navigation.navigate('OTPVerify',{otp,mobile})
                }
            }
            catch(error) {
                let message = ""
                if(error.response) {
                    console.log(error.response);
                    message = error.response.data.message;
                } else if(error.request) {
                    console.log(error.request._response);
                    message = error.request._response;
                } else {
                    message = error.message
                }
            }
           
        }
    }

    const getValue = (value) => {
        setMobile((prevValue)=>prevValue+value);
        setMobileErr("");
    }

    const start = { x: 0.5, y: 0 }
    const end = { x: 0.5, y: 1 }
    const gradient = [Color.primaryLightColor, Color.primaryDarkColor]

    return (
        <ScreenContainer>
            <Header imageURL = {<Image style={{marginBottom: "10%"}} source = {require("../../assets/Group.png")} />} />
            <View style={styles.container}>
                <Text style={styles.headingText}>Phone Number Verification</Text>
                <Text style={styles.subHeadingText}>{"Please enter your mobile number to \nreceive One Time Password"}</Text>
                <CustomLinearGradient start={start} end={end} gradient={gradient} style={styles.barStyle} />
                <CustomTextInput size={10} getValue={getValue}/>
                <ErrorText message={mobileErr} />
                <CustomButton text="SEND OTP" onPress={handleButtonPress}/>
            </View>
        </ScreenContainer>
    );
};

//make this component available to the app
export default OtpScreen;
