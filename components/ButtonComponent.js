import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import colors from '../config/colors'
import { useNavigation } from '@react-navigation/native';


export default function ButtonComponent({ title, route }) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => navigation.navigate(route)}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  buttonText: {
    color: colors.white,
    fontSize: 17,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontWeight: 'normal',
    fontFamily: 'Open Sans'
  }
})