import { KeyboardAvoidingView, View, TextInput, Text, StyleSheet, Image} from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { authentication } from '../firbase-Config';
import LightButton from '../components/buttons/LightButton';
import CustomInput from '../components/CustomInput';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { textOptions, parameters } from '../components/GlobalStyles';
import BackHeader from '../components/BackHeader';
import { onLog } from 'firebase/app';


const CreateAccountScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    let [validationMessage, setValidationMessage] = useState('');

    let validateAndSet = ( value, valueToCompare, setValue) => {
        if (value !== valueToCompare){
            setValidationMessage('hiya friend, those passwords do not match');
        } else {
            setValidationMessage('');
        }
        setValue(value);
    };

    //text values
    const login = 'Login';
    const returningUser = 'already have an account? ';

    //navigates back to login screen
    const onLoginPressed =() =>{
        navigation.navigate('Login')
    }

    //navigates to welcome screen
    const onBackPressed = () => {
        navigation.navigate('Welcome');
    }

    //function to create a new account with an email and password, using firebase
    const handleSignup = () => {
      if(password === confirmPassword){
        createUserWithEmailAndPassword(authentication, email, password)
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
    }

    return(
        <KeyboardAvoidingView style={styles.container}>
            <View style={{alignItems:'center'}}>
            <BackHeader onPress={onBackPressed}/>
                <View style={styles.header}>
                    <Text style={textOptions.heading1}>Create Account</Text>
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
                        placeholder='email'      
                        value={email}
                        onChangeText={text=>setEmail(text)}                  
                    />
                 </View>
                 <View style={styles.noBottomBorderInputStyle}>
                    <Icon
                        style={styles.iconPadding}
                        name='lock'
                        size={20}
                        color='#FF5A33'
                        />
                    <CustomInput
                        style={styles.inputText}
                        placeholder='password'      
                        value={password}
                        onChangeText={(value)=> validateAndSet(value, confirmPassword, setPassword)}    
                        secureTextEntry              
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
                        placeholder='confirm password'      
                        value={confirmPassword}
                        onChangeText={(value)=> validateAndSet(value, password, setConfirmPassword)}   
                        secureTextEntry              
                    /> 
                </View>
                <View style={styles.infoContainer}>
                    <Text style={textOptions.accountInfoText}>already have an account? <Text onPress={onLoginPressed} style={{color:'#FF5A33'}}>Login</Text></Text>                    
                </View>   
                <View style={{alignItems:'center', paddingTop:10, width: '80%'}}>
                    <Text style={styles.inputText}>{validationMessage}</Text>
                </View> 
            </View>
            <View style={styles.buttonContainer}>           
                <LightButton onPress = {handleSignup} text={'Continue'}/>
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
    },

    forgotPasswordText:{
        fontSize: 14,
        color: '#FF5A33',
        fontFamily: 'RobotoMono',    
    }
});

export default CreateAccountScreen;

