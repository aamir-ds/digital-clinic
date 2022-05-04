import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import colors from '../config/colors'


export default function ButtonComponent(props) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
</TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.primary,
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
      },
      buttonText:{
        color: colors.white,
        fontSize: 17,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontWeight: 'normal',
        fontFamily: 'Open Sans'
      }
})