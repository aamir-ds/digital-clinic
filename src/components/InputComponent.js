import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import colors from '../config/colors'

export default function InputComponent(props) {

  function inputBlur(val) {
    props.OnChange(val)
  }

  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput keyboardType={props.type} style={styles.input} maxLength={props.maxLength} onChange={(value) => inputBlur(value.nativeEvent.text)}
        autoCapitalize={props.capitalizeOn && props.capitalizeOn == true ? 'words' : 'none'} />
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    color: colors.greyFont,
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#e4e9f2',
    backgroundColor: colors.lightGrey,
    color: colors.darkGrey,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
  }
})