//import liraries
import React, { useEffect, useRef,useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Color from '../../utility/colors'
import {widthPercentageToDP,heightPercentageToDP,normalize,fontScale,isAndroid} from '../../utility/device'

global.valueArray = [];

// create a component
const CustomTextInput = (props) => {
    const {size} = props;
    
    const focuedData = Array(size).fill(false)
    const[isFocused,setIsFocused] = useState(focuedData);
    
    const[count,setCount] = useState([]);
    const input = Array(size).fill(0)

    const inputEl = useRef([0,1,2,3,4,5,6,7,8,9]);
    
    const focusNext = (value,index) => {
        if(index<size-1 && value) {
            inputEl.current[index+1].focus();
        }
        if (index === size - 1 && value) {
            inputEl.current[index].blur();
        }
        valueArray[index] = value;
    }

    const handleEndEditing = () => {
        props.getValue(valueArray.join(""));
    }

    const focusPrevious = (event,index) => {
        const key = event.nativeEvent.key;
        if(key === "Backspace"&& index !== 0) {
            inputEl.current[index] = "";
            valueArray[index] = "";
            if(isFocused[index]) {
                let tempIsFocused = isFocused;
                tempIsFocused[index] = false;
                setIsFocused(tempIsFocused);
                setCount(count+1);
            }
            inputEl.current[index-1].focus();
        }
    }    

    const handleFocus = (event,index) => {
        let tempIsFocused = isFocused;
            tempIsFocused[index] = true;
            setIsFocused(tempIsFocused);
            setCount(count+1);
    }
    const handleBlur = (index) => {
        if(index === 0 && isFocused[index] && valueArray[index] === "") {
            let tempIsFocused = isFocused;
            tempIsFocused[index] = false;
            setIsFocused(tempIsFocused);
            setCount(count+1);
            //console.log(tempIsFocused,index);
        }
        
        //console.log(tempIsFocused);
    }
    //console.log(isFocused)
    let borderStyle = {}; 
    return (
        <View  style={{
            flexDirection:"row",
            justifyContent:"center",
            marginVertical:normalize(20),
        }}>
            {
                props.screen !== "otp" && 
                <Text style={styles.countryCodeStyle}>+91</Text>
            }
       { 
            input.map((item,index)=>{
                if(props.screen === "otp"){
                    borderStyle = {
                        borderColor : !isFocused[index] ? Color.textInputColor : Color.textInputFocusColor,
                        borderWidth : 1,
                        borderRadius:5,
                        marginHorizontal:normalize(5),
                        width:widthPercentageToDP('15%'),
                        height:heightPercentageToDP('8%'),
                    }
                } else {
                    borderStyle = {
                        borderBottomColor : !isFocused[index] ? Color.textInputColor : Color.textInputFocusColor,
                        borderBottomWidth : 1
                    }
                }
                return (
                    <TextInput
                        keyboardType="phone-pad" 
                        textContentType={isAndroid ? "none" : "oneTimeCode"}
                        maxLength={1} 
                        key={index} 
                        onChangeText={(value)=>focusNext(value,index)}
                        onKeyPress={(event)=>focusPrevious(event,index)}
                        ref={el => inputEl.current[index] = el} 
                        style={{...styles.container,...borderStyle}}   
                        onFocus={(event)=>handleFocus(event,index)}
                        onBlur={()=>handleBlur(index)}
                        onEndEditing={handleEndEditing}
                    />
                )
            })
        }
        </View>
        
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width:widthPercentageToDP('7%'),
        marginHorizontal: normalize(1),
        fontSize: fontScale(18),
        textAlign: 'center',
        paddingVertical:normalize(1),
        color:Color.black
    },
    countryCodeStyle:{
        fontSize:fontScale(18),
        fontWeight:"600",
        lineHeight:27,
        marginRight:normalize(5),
    }
});

//make this component available to the app
export default CustomTextInput;
