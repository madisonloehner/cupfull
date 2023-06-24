import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import { textOptions } from '../GlobalStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DarkButton = ({onPress, text}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={textOptions.darkButtonText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        backgroundColor: '#008080',
        padding: 10,
        width: '80%',
        borderRadius: 5,
        margin: 10,
    },
})

export default DarkButton;