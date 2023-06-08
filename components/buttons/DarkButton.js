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
        backgroundColor: '#F25E22',
        padding: 10,
        width: '60%',
        margin: 10,
        borderRadius: 5,
    },
})

export default CustomButton;