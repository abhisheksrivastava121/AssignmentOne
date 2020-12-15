//import liraries
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

// create a component
const CustomLinearGradient = (props) => {
    const {children,gradient,start,end,style} = props;
    return (
        <LinearGradient start={start} end={end} colors={gradient} style={style}>
            {children}
        </LinearGradient>
    );
};
//make this component available to the app
export default CustomLinearGradient;
