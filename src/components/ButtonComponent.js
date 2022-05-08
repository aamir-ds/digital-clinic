import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react';
import colors from '../config/colors'
import { useNavigation } from '@react-navigation/native';


export default function ButtonComponent({ title, route }) {
  const navigation = useNavigation()
  return (
    <Pressable style={styles.button} activeOpacity={0.8} 
    onPress={() => navigation.navigate(route)}
    android_ripple={{color: colors.purple,borderless: false, radius: 200}}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    height: 45,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  buttonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontWeight: 'normal',
    fontFamily: 'Open Sans'
  }
})