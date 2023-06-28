import { KeyboardAvoidingView, View, TextInput, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import { authentication, currentUser } from '../firbase-Config';
import CustomInput from '../components/CustomInput';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { parameters, textOptions } from '../components/GlobalStyles';
import LightButton from '../components/buttons/LightButton';
import BackHeader from '../components/BackHeader';
import Checkbox from 'expo-checkbox';


const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setChecked] = useState(false)
    const [validationMessage, setValidationMessage] = useState('');

    //logs in existing users with firebase auth
    const handleLogin =() => {
        signInWithEmailAndPassword(authentication, email, password)
        .then((userCredential) => {
            navigation.navigate('StartQuiz', { user: userCredential})
        })
        .catch((error) => {
            if(error.code='auth/email-already-exists'){
            setValidationMessage('hiya friend, this email is already registered');
            }
            if(error.code='auth/invalid-password'){
                setValidationMessage('hiya friend, your password must be at least six characters long');
            }
            if(error.code='auth/invalid-email'){
                setValidationMessage('hiya friend, please enter a valid email address');
            }
            else(
                setValidationMessage('hmm, please try again later')
            )
        })
    }

    //text constants
    const newUser="don't have an account? ";
    const createAccount='Create Account';
    const forgotPassword='forgot password'
    const resetPassword='Reset Password'

    //navigates to welcome screen
    const onBackPressed = () => {
        navigation.navigate('Welcome');
    }

    //navigates to welcome screen
    const onForgotPasswordPressed = () => {
         navigation.navigate('ForgotPassword');
    }


    if(currentUser) {
        navigation.navigate('StartQuiz');
    }


    return(
        <KeyboardAvoidingView style={styles.container}>
            <View style={{alignItems: 'center'}}>
            <BackHeader onPress={onBackPressed}/>
            <View style={styles.header}>
                <Text style={textOptions.heading1}>Login</Text>
                <Image source={require('../assets/flower.png')} resizeMode='contain' style={{height: 110, width: 200,}}></Image>
            </View>
            <View style={styles.noBottomBorderInputStyle}>
                <Icon
                    style={styles.iconPadding}
                    name='email'
                    size={20}
                    color='#FF5A33'
                />
                <CustomInput
                    style={styles.inputText}
                    placeholder={'email'}    
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
                    size={20}
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
            <View style={styles.infoContainer}>
                <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#008080' : undefined}
                />
                <Text style={textOptions.infoText}>remember me?</Text>
                <Text onPress={onForgotPasswordPressed} style={styles.forgotPasswordText}>  forgot password?</Text>
            </View>  
            <View style={{alignItems:'center',paddingTop:10, width: '80%'}}>
                    <Text style={styles.inputText}>{validationMessage}</Text>
            </View> 
            </View>
            <View style={styles.buttonContainer}>           
                <LightButton onPress = {handleLogin} text={'Continue'}/>
            </View>  
        </KeyboardAvoidingView>
    )
};
const styles=StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: parameters.statusBarHeight,
        backgroundColor: '#FDFFE4',
    },
    
    checkbox: {
        borderWidth: 1,
        borderColor: '#152833',
        marginRight: 20,
        height: 14,
        width: 14,
        marginLeft: 10
      },

    header: {
        width: '80%', 
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingBottom: 50, 
    },

    inputStyle:{
        width: '80%',
        padding: 15,
        borderColor: '#000',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FDFFE4',
    },

    noBottomBorderInputStyle:{
        width: '80%',
        padding: 15,
        borderColor: '#152833',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FDFFE4',
        borderBottomColor: '#FDFFE4'
    },
    iconPadding:{
        marginHorizontal: 5,
    },

    inputText:{
        fontFamily: 'RobotoMono',
        color: '#152833',
        fontSize: 16,
    },

    buttonContainer:{ 
        paddingTop: 50, 
        alignItems: 'flex-end', 
        width: '90%', 
        alignContent: 'center'
    },

    infoContainer:{
        paddingTop: 10, 
        width: '80%', 
        alignItems: 'flex-end',
        flexDirection: 'row', 
    },

    forgotPasswordText:{
        fontSize: 14,
        color: '#FF5A33',
        fontFamily: 'RobotoMono',    
    }
});

export default LoginScreen;
