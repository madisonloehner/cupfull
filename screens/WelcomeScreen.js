import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import BlueButton from '../components/buttons/BlueButton';

const WelcomeScreen = ({navigation}) => {
    //navigates to Home Screen on button press
    const onGetStartedPressed = () => {
        navigation.push('Home');
    };

    //button text
    const getStarted = 'Get Started'

    return(
        <View style= {styles.container}>
            <Text style={styles.heading}></Text>
            <BlueButton text={getStarted} onPress={onGetStartedPressed}/>
        </View>
    )
};

const styles=StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    heading:{
        fontFamily: Poppins_400Regular,
    }

});

export default WelcomeScreen;