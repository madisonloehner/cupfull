import * as React from 'react';
import { StyleSheet, View, Image, Text, SafeAreaView, Animated, ImageBackground, Easing} from 'react-native';
import DarkButton from '../components/buttons/DarkButton';
import { textOptions } from '../components/GlobalStyles';
import { useEffect } from 'react';


const WelcomeScreen = ({navigation}) => {

    const spinValue = new Animated.Value(0);

    const spin = () => {
        spinValue.setValue(0);
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 10000,
          easing: Easing.linear,
          useNativeDriver: true,
        }).start(() => spin());
      };
      useEffect(() => {
        spin();
      }, []);

    const rotate = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
      });

    //navigates on button press
    const loginPressed = () => {
        navigation.push('Login');
    };

    const createAccountPressed = () => {
        navigation.push('CreateAccount');
    };

    //button text
    const login = 'Login.'
    const newUser = 'Get Started'
    const returningUser = 'already have an account? '
    
    return(
        <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../assets/cups.png')} resizeMode='contain' style={styles.backgroundImage}>
                    <View style={styles.spinnerContainer}>
                    <Animated.View style = {{transform:[{rotate}]}}>
                        <Image source={require('../assets/spinner.png')} resizeMode='contain' style={{height: 180, width: 110,}}/>
                    </Animated.View>
                    </View>
                </ImageBackground>
            <View style={styles.buttonContainer}>
                <DarkButton onPress={createAccountPressed} text={newUser}/>
                <Text style={textOptions.accountInfoText}>{returningUser}<Text onPress={loginPressed} style={{color: '#FF5A33'}}>{login}</Text></Text>
            </View>
        </SafeAreaView>
        
    )
};

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDFFE4',
        padding: 10,
    },

    spinnerContainer: {
        height: '50%',
        width: '100%',      
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    backgroundImage:{
        margin: 20,
        flex: 4,
        flexDirection: 'column-reverse',
    },

    buttonContainer:{
        flex:1,
        alignItems: 'center',
        paddingBottom: 10,
    },
});

export default WelcomeScreen;