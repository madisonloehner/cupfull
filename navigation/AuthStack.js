import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import StartQuizScreen from '../screens/StartQuizScreen';

const Auth = createNativeStackNavigator();

export function AuthStack(){
    return(
        <Auth.Navigator
            initialRouteName= 'Welcome'>
            <Auth.Screen
                name = 'Welcome'
                component = {WelcomeScreen}
                options = {{headerShown: false}}/>
            <Auth.Screen
                name = 'Login'
                component = {LoginScreen}
                options = {{headerShown: false}}/>
            <Auth.Screen
                name = 'CreateAccount'
                component = {CreateAccountScreen}
                options = {{headerShown: false}}/>
            <Auth.Screen
                name = 'StartQuiz'
                component = {StartQuizScreen}
                options = {{headerShown: false}}/>
            </Auth.Navigator>
    )};