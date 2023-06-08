import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, SafeAreaView,ImageBackground } from 'react-native';
import DarkButton from '../components/buttons/DarkButton';
import { textOptions } from '../components/GlobalStyles';
import WavyHeader from '../components/WavyHeader';
import CupFull from '../assets/cupfullbg.png';


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
    const createAccount = 'Create Account'
    
    return(
        <SafeAreaView style={styles.container}>
            <View style={{flex: 2, backgroundColor: '#000'}}>
                <WavyHeader 
                    customStyles={styles.svgCurve}
                    customHeight={300}
                    customTop={200}
                    customBgColor="#f24"
                    />  
                </View> 
                <View style={{flex: 1, backgroundColor: '#000', justifyContent:'center', alignItems: 'center'}}>
                <DarkButton onPress={loginPressed}>{login}</DarkButton>
                <DarkButton onPress={createAccountPressed}>{createAccount}</DarkButton>
                </View>
        </SafeAreaView>
        
    )
};

const styles=StyleSheet.create({
    container: {
        flex: 1,
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