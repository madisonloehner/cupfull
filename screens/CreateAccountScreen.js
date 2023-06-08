import { KeyboardAvoidingView, View, TextInput, Text, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { authentication } from '../firbase-Config'


const CreateAccountScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorState, setErrorState] = useState('');

    //function to create a new account with an email and password, using firebase
    const handleSignup = async () => {
    createUserWithEmailAndPassword( authentication, email, password)
    .catch((error) => {
      setErrorState(error.code);
      console.log(errorState);
    })
};
    return(
        <KeyboardAvoidingView>
            <SafeAreaView>
                <Text>Create Account</Text>
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
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
};

export default CreateAccountScreen;

