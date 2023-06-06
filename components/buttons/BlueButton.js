import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, text}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        backgroundColor: '#A0B7E8',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        margin: 10,
        borderRadius: 10,
    },

    text:{
        fontSize: 16,
    }
})

export default CustomButton;