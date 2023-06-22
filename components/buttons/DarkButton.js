import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import { textOptions } from '../GlobalStyles';

const CustomButton = ({onPress, text}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={textOptions.darkButtonText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        backgroundColor: '#D9E021',
        padding: 10,
        width: '60%',
        borderRadius: 5,
        margin: 10,
    },
})

export default CustomButton;