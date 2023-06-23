import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { textOptions } from '../GlobalStyles';

const LightButton = ({onPress, text}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={textOptions.lightButtonText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        backgroundColor: '#FDFFE4',
        padding: 10,
        width: '70%',
        borderRadius: 5,
        margin: 10,
    },
})

export default LightButton
