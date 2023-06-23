import { KeyboardAvoidingView, View, TextInput, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import { authentication, currentUser } from '../firbase-Config';
import CustomInput from '../components/CustomInput';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { textOptions } from '../components/GlobalStyles';
import LightButton from '../components/buttons/LightButton';


const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validationMessage, setValidationMessage] = useState('');

    //logs in existing users with firebase auth
    const handleLogin =() => {
        signInWithEmailAndPassword(authentication, email, password)
        .then((userCredential) => {
            navigation.navigate('StartQuiz', { user: userCredential})
        })
        .catch((error) => {
            setValidationMessage(error.message);
        })
    }

    //text constants
    const newUser="don't have an account? ";
    const createAccount='Create Account';
    const forgotPassword='forgot password'
    const resetPassword='Reset Password'

    //navigates new users to create account screen
    const onCreateAccountPressed = () => {
        navigation.navigate('CreateAccount');
    }


    if(currentUser) {
        navigation.navigate('StartQuiz');
    }


    return(
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.inputStyle}>
                <Icon
                    style={styles.iconPadding}
                    name='email'
                    size={18}
                    color='#FF5A33'
                />
                <CustomInput
                    style={styles.inputText}
                    placeholder={'email' }    
                    value={email}
                    onChangeText={text=>setEmail(text)}
                    keyboardType={'email-address'}
                    secureTextEntry={false}               
                    />
            </View>
            <View style={styles.inputStyle}>
                <Icon
                    style={styles.iconPadding}
                    name='lock'
                    size={18}
                    color='#FF5A33'
                />
                <CustomInput
                    style={styles.inputText}
                    placeholder={'password'}      
                    value={password}
                    onChangeText={text=>setPassword(text)}    
                    secureTextEntry={true} 
                />  
            </View>                 
            <LightButton onPress = {handleLogin} text={'Login'}></LightButton>
            <View>
                <Text style={textOptions.accountInfoLightText}>{newUser}<Text onPress={onCreateAccountPressed} style={{color: '#FF5A33'}}>{createAccount}</Text></Text>
                <Text style={{textAlign: 'right', fontFamily: 'RobotoMono', color: '#FDFFE4', paddingBottom: 10, paddingTop:10,}}>{forgotPassword}</Text>
            </View>
        </KeyboardAvoidingView>
    )
};
const styles=StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#008080',
    },

    inputStyle:{
        width: '80%',
        padding: 10,
        borderRadius: 5,
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FDFFE4',
    },

    iconPadding:{
        marginHorizontal: 5,
    },

    inputText:{
        fontFamily: 'RobotoMono',
        color: '#152833',
    }
});

export default LoginScreen;
