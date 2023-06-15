import { KeyboardAvoidingView, View, TextInput, Text, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { authentication } from '../firbase-Config';
import DarkButton from '../components/buttons/DarkButton';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import StartQuizScreen from './StartQuizScreen';


const CreateAccountScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    let [validationMessage, setValidationMessage] = useState('');
    const [errorState, setErrorState] = useState('');

    let validateAndSet = ( value, valueToCompare, setValue) => {
        if (value !== valueToCompare){
            setValidationMessage('Passwords do not match');
        } else {
            setValidationMessage('');
        }

        setValue(value);
    };

    //function to create a new account with an email and password, using firebase
    const handleSignup = () => {
      if(password === confirmPassword){
        createUserWithEmailAndPassword(authentication, email, password)
        .then((userCredential) => {
            navigation.navigate('StartQuiz', { user: userCredential})
          })
          .catch((error) => {
            setValidationMessage(error.message);
          })
      }  
    }

    return(
        <KeyboardAvoidingView>
            <SafeAreaView>
                <Text>Create Account</Text>
                <Text>{validationMessage}</Text>
                <View>
                    <TextInput
                        placeholder='Email'      
                        value={email}
                        onChangeText={text=>setEmail(text)}                  
                    />
                    <TextInput
                        placeholder='Password'      
                        value={password}
                        onChangeText={(value)=> validateAndSet(value, confirmPassword, setPassword)}    
                        secureTextEntry              
                    />
                    <TextInput
                        placeholder='Confirm Password'      
                        value={confirmPassword}
                        onChangeText={(value)=> validateAndSet(value, password, setConfirmPassword)}   
                        secureTextEntry              
                    />                    
                    <DarkButton onPress = {handleSignup} text = {'Create Account'}></DarkButton>
                    <View>
                        <Text>Login</Text>
                    </View>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
};

export default CreateAccountScreen;

