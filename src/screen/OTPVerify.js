//import liraries
import React, { useState } from 'react';
import { View, Text,Alert } from 'react-native';
import CustomLinearGradient from '../components/LinearGradient/CustomLinearGradient';

import Color from '../utility/colors';
import * as Helper from '../utility/helper';
import Constant from '../utility/constants';

import styles from './styles';

import CustomButton from '../components/Button/CustomButton';
import CustomTextInput from '../components/CustomTextInput/CustomTextInput';
import ErrorText from '../components/ErrorText/ErrorText'
import { TouchableOpacity } from 'react-native-gesture-handler';

// create a component
const OTPVerify = (props) => {
    console.log(props);
    const [otp,setOtp] = useState("");
    const [otpErr,setOtpErr] = useState("");
    
    let OTP = props.route.params.otp;
    const mobile = props.route.params.mobile;

    const handleButtonPress = () => {
        let status = true;
        console.log("before",otp);
        if(otp.length > 4) {
            setOtp(otp.slice(otp.length));
        }
        console.log("after",otp);
        if(otp === "") {
            status = false;
            setOtpErr("Please provide otp")
        } 
        if(otp.length !== 4) {
            status = false;
            setOtpErr("Please check otp before proceeding!!!");
        }
        if(status) {
            setOtpErr("");
            if(otp == OTP) {
                Alert.alert(
                    'OTP Checking',
                    'Your OTP has been verified succesfully',
                    [
                      { text: 'OK', onPress: () => console.log('OK Pressed') }
                    ],
                    { cancelable: false }
                );
            } else {
                setOtpErr("Please provide a valid otp");
            }
        }
    }
    const handleChangeNumber = () => {
        props.navigation.navigate("OTP");
    }   
    const handleResendOtp = async() => {
        OTP = Math.floor(1000 + Math.random() * 9000);
        let url = Constant.API_KEY +"/SMS/"+mobile+"/"+OTP
        try {
            const response = await Helper.get_req(url);
            if(response.status ===200) {
                Alert.alert(
                    'Sending Otp',
                    'An otp has been sent to your mobile number.',
                    [
                      { text: 'OK', onPress: () => console.log('OK Pressed') }
                    ],
                    { cancelable: false }
                );
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
    const getValue = (value) => {
        setOtp((prevValue)=>prevValue+value);
        setOtpErr("");
    }

    const start = { x: 0.5, y: 0 }
    const end = { x: 0.5, y: 1 }
    const gradient = [Color.primaryLightColor, Color.primaryDarkColor]

    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Verification Code</Text>
            <Text style={styles.subHeadingText}>{"OTP has been sent to your mobile \nnumber. Please verify"}</Text>
            <CustomLinearGradient start={start} end={end} gradient={gradient} style={styles.barStyle} />
            <CustomTextInput size={4} getValue={getValue} screen="otp"/>
            <ErrorText message={otpErr}/>
            <CustomButton text="CONFIRM" onPress={handleButtonPress}/>
            <View style={styles.buttonConatinerStyle}>
                <TouchableOpacity activeOpacity={1} onPress={handleChangeNumber}>
                    <Text style={styles.changeNumberText}>Change Number |</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={handleResendOtp}>
                    <Text style={styles.resendOtpText}> Resend OTP </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


//make this component available to the app
export default OTPVerify;
