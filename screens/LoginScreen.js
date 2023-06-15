import { KeyboardAvoidingView, View, TextInput, Text, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { authentication, currentUser } from '../firbase-Config';
import DarkButton from '../components/buttons/DarkButton';
import { createUserWithEmailAndPassword } from 'firebase/auth';


const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorState, setErrorState] = useState('');

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
                    <DarkButton onPress = {handleSignup} text={'Login'}></DarkButton>
                    <View>
                        <Text>Create Account</Text>
                    </View>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
};

export default LoginScreen;
