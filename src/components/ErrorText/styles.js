import {StyleSheet} from 'react-native'
import { fontScale,normalize } from '../../utility/device'
import Color from '../../utility/colors';
const styles = StyleSheet.create({
    container:{
        top:normalize(-20),
        left:normalize(-10)
    },
    errorText: {
        fontWeight:'500',
        fontSize:fontScale(14),
        color:Color.errorText,
    }
});
export default styles;