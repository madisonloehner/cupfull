import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartQuizScreen from '../screens/StartQuizScreen';
import HomeScreen from '../screens/HomeScreen';
import HomeTab from '../navigation/HomeTab';

const Main = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Main.Navigator>
        <Main.Screen
            name = 'StartQuiz'
            component = {StartQuizScreen}
            options = {{headerShown: false}}/>
        <Main.Screen
            name = 'Home'
            component = {HomeTab}
            options = {{headerShown: false}}/>
    </Main.Navigator>
  )
}

const styles = StyleSheet.create({})