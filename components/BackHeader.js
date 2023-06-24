import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { parameters } from './GlobalStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BackHeader = ({onPress}) => {
  return (
    <View style  = {styles.header}>
        <View style = {styles.menuIcon}>
            <TouchableOpacity onPress = {onPress}>
                <Icon
                    name = 'arrow-left'
                    color = '#152833'
                    size = {35}/>
            </TouchableOpacity>
        </View>
</View>
  )
}

export default BackHeader

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FDFFE4',
        height: parameters.headerHeight,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuIcon: {
        flex: 1, 
        height: parameters.headerHeight, 
        paddingLeft: 20,
        paddingTop: 15,
   },
})