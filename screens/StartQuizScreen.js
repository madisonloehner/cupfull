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
            <Text>Start the Quiz Screen</Text>
            <DarkButton onPress = {onQuizQuestionComplete}/>
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