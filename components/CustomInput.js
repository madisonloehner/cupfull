import { StyleSheet, View, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({style,placeholder, value, autoCorrect, autoCaptialize, secureTextEntry, keyboardType, onChangeText}) => {
  return (
    <View style={{flex:1}}>
        <TextInput
            style={style}
            placeholder={placeholder}
            value={value}
            autoCorrect={autoCorrect}
            autoCaptialize={autoCaptialize}
            secureTextEntry={secureTextEntry} 
            keyboardType={keyboardType}
            onChangeText={onChangeText}
        />
    </View>
  )
}

export default CustomInput

