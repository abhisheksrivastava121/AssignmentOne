import { fontScale, heightPercentageToDP, normalize } from '../utility/device';
import {StyleSheet,Platform} from 'react-native';
// define your styles
const styles = StyleSheet.create({
    mainContainer:{
        height:heightPercentageToDP('100%'),
    },
    container: {
        alignItems: 'center',
        marginTop: "5%"
    },
    headingText:{
        fontSize:fontScale(24),
        lineHeight:30,
        fontWeight:"600",
        marginBottom:normalize(21),
    },
    subHeadingText:{
        textAlign:"center",
        fontSize:fontScale(14),
        lineHeight:20,
        fontWeight:"600",
        opacity: 0.8,
        marginBottom:normalize(19),
    },
    barStyle:{
        height:'1%',
        width:'18%',
        marginBottom:normalize(10)
    },
    buttonConatinerStyle:{
        flexDirection:"row",
        marginVertical:normalize(30),
    },
    changeNumberText:{
        lineHeight:20,
        fontSize:fontScale(16),
    },
    resendOtpText:{
        lineHeight:20,
        fontSize:fontScale(16),
        color:"#187338",
        fontWeight:"bold"
    },
    iconImage:{
        width:'40%',
        height:'40%',
        marginBottom: "10%"
    }
});
export default styles;