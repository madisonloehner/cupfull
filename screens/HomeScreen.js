import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({navigation}) => {

    return(
        <SafeAreaView>
            <Text>Home Screen</Text>
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

export default HomeScreen;