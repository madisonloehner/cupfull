import * as React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Dimensions, SafeAreaView,ImageBackground } from 'react-native';
import DarkButton from '../components/buttons/DarkButton';
import { textOptions } from '../components/GlobalStyles';


const WelcomeScreen = ({navigation}) => {

    //navigates on button press
    const loginPressed = () => {
        navigation.push('Login');
    };

    const createAccountPressed = () => {
        navigation.push('CreateAccount');
    };

    //button text
    const login = 'Login'
    const newUser = 'Get Started'
    const returningUser = 'already have an account? '
    
    return(
        <SafeAreaView style={styles.container}>
            <View style={{flex:3, paddingTop: 50, justifyContent:'center', alignItems: 'center', margin: 30}}>
            <Image source={require('../assets/cups.png')} style={{resizeMode:'contain',  width: '100%', height:'100%'}}/>
            </View>
            {/* <Image style={{height: 400, width: 400,}}source={require('../assets/favicon.png')}/> */}
            <View style={{flex:1,justifyContent:'center', alignItems: 'center'}}>
                <DarkButton onPress={createAccountPressed} text={newUser}/>
                <Text style={textOptions.accountInfoText}>{returningUser}<Text onPress={loginPressed}>{login}</Text></Text>
            </View>
        </SafeAreaView>
        
    )
};

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff69b4',
        padding: 10,
    },

    headerContainer:{
        marginTop: 50,
        marginHorizontal: 10,
    },

    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
    },

    svgCurve: {
        position: 'absolute',
        width: Dimensions.get('window').width,
    }
});

export default WelcomeScreen;