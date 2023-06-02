import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = ({useNavigation}) =>{

    return(
        <View style= {styles.container}>
            <Text >Welcome Screen</Text>
        </View>
    )
};

const styles=StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default WelcomeScreen;