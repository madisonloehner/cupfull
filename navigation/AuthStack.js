import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

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
                name = 'ForgotPassword'
                component = {ForgotPasswordScreen}
                options = {{headerShown: false}}/>
            </Auth.Navigator>
    )};