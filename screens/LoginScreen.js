import { KeyboardAvoidingView, View, TextInput, Text, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { authentication, currentUser } from '../firbase-Config';
import DarkButton from '../components/buttons/DarkButton';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { textOptions } from '../components/GlobalStyles';


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
    const createAccount='Create Account'

    //navigates new users to create account screen
    const onCreateAccountPressed = () => {
        navigation.navigate('CreateAccount');
    }


    if(currentUser) {
        navigation.navigate('StartQuiz');
    }


    return(
        <KeyboardAvoidingView>
            <SafeAreaView>
                <Text>Login</Text>
                <View>
                    <TextInput
                        placeholder='Email'      
                        value={email}
                        onChangeText={text=>setEmail(text)}                  
                    />
                    <TextInput
                        placeholder='Password'      
                        value={password}
                        onChangeText={text=>setPassword(text)}    
                        secureTextEntry              
                    />                   
                    <DarkButton onPress = {handleLogin} text={'Login'}></DarkButton>
                    <View>
                        <Text style={textOptions.accountInfoText}>{newUser}<Text onPress={onCreateAccountPressed}>{createAccount}</Text></Text>
                    </View>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
};

export default LoginScreen;
