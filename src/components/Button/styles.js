import {fontScale, normalize, widthPercentageToDP} from '../../utility/device'
import {StyleSheet} from 'react-native'
import Color from '../../utility/colors';
 // define your styles
const styles = StyleSheet.create({
    container: {
        width:widthPercentageToDP('90%'),
        borderRadius:50,
        paddingVertical:normalize(15),
        shadowColor: "#00000029",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    },
    text:{
        textAlign:"center",
        color:Color.white,
        fontSize:fontScale(18)
    }
});

export default styles;