import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { textOptions } from '../GlobalStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LightButton = ({onPress, text}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={textOptions.lightButtonText}>{text}</Text>
            <Icon
                style={{paddingLeft:10}}
                name={'arrow-right'}
                size={25}
                color='#FDFFE4'/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#008080',
        padding: 15,
        borderRadius: 5,
        flexDirection: 'row'
    },
})

export default LightButton
