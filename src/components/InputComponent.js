import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import colors from '../config/colors'

export default function InputComponent(props) {
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput keyboardType={props.type} style={styles.input} maxLength={props.maxLength} />
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    color: colors.greyFont,
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: colors.greyFont,
    backgroundColor: colors.lightGrey,
    color: colors.darkGrey,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
  }
})