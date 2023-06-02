import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({useNavigation}) =>{

    return(
        <View style= {styles.container}>
            <Text>Home Screen</Text>
        </View>
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