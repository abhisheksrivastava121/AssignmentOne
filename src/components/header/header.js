import React from 'react'
import { Text, View, Image} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from '../header/style';

const header = (props) =>  {
        console.log(props)
        return (
            <LinearGradient colors={['#6AB944', '#187338']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}>
                    <View style = {styles.firstCircle} />
                    <View style = {styles.secondCircle} >
                        <View style = {styles.thirdCircle} />
                    </View>
                    {props.imageURL}
            </LinearGradient>
        )
    
}

export default header
