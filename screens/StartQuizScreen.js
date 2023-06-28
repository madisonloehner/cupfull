import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DarkButton from '../components/buttons/DarkButton';


const StartQuizScreen = ({navigation}) => {

    const onQuizQuestionComplete = () => {
        navigation.navigate('Home');
    };

    return(
        <SafeAreaView>
            <Text>start quiz screen</Text>
        </SafeAreaView>
    )
};

const styles=StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    

});

export default StartQuizScreen;