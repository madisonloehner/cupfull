import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import AddScreen from '../screens/AddScreen';


const Tab = createMaterialBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen
            name = 'HomeScreen'
            component={HomeScreen}
        />
        <Tab.Screen
            name='Add'
            component={AddScreen}
        />
    </Tab.Navigator>
  )
}

export default HomeTab

const styles = StyleSheet.create({})