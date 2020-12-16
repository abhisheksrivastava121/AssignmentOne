import { widthPercentageToDP } from '../../utility/device';
import {StyleSheet} from 'react-native';
// define your styles
const styles = StyleSheet.create({
    container: { 
        height: widthPercentageToDP("70%"), 
        width: widthPercentageToDP("120%"), 
        borderBottomRightRadius: widthPercentageToDP("115%")/2, 
        borderBottomLeftRadius: widthPercentageToDP("115%")/2, 
        marginLeft: -39, 
        justifyContent: "center", 
        alignItems: "center" 
    },
    firstCircle: {
        width: widthPercentageToDP("25%"), 
        height: widthPercentageToDP("25%"), 
        borderRadius: widthPercentageToDP("25%")/2, 
        top: "-25%",  
        backgroundColor: "#5CAE42", 
        zIndex: 200
    },
    secondCircle: {
        width: widthPercentageToDP("52%"), 
        height: widthPercentageToDP("60%"), 
        borderRadius: widthPercentageToDP("55%")/2, 
        top: "-45%", 
        right: "0%", 
        position: "absolute", 
        backgroundColor: "#479847"
    },
    thirdCircle: {
        width: widthPercentageToDP("25%"), 
        height: widthPercentageToDP("25%"), 
        borderRadius: widthPercentageToDP("25%")/2, 
        top: "30%", 
        marginLeft: "20%", 
        backgroundColor: "#59A846"
    }
});
export default styles;