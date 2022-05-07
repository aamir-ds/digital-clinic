import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../config/colors';

const RadioButton = ({ data }) => {
  const [userOption, setUserOption] = useState(null);

  return (

    <View style={styles.container}>
      {data.map((item) => {
        return (
          <Pressable key={item.id} style={styles.normalRadioButton} onPress={() => setUserOption(item.title)}>
            <View style={styles.radioInnerContainer}>
              <View style={styles.radioCircle}>
                <View style={item.title === userOption ? styles.radioCircleChecked : styles.unselected}></View>
              </View>
              <Text>{(item.title).toUpperCase()}</Text>
            </View>
          </Pressable>
        );
      })}
    </View>

  )
}

export default RadioButton

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  option: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  unselected: {

  },
  selected: {
    backgroundColor: 'blue',
    margin: 6,
    padding: 10,
    borderRadius: 10,
  },

  radioInnerContainer: {
    flexDirection: 'row'
  },

  radioCircle: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: "#6c7ef5",
    borderRadius: 50,
    marginHorizontal: 10,
    padding: 2
  },

  radioCircleChecked: {
    height: 12,
    width: 12,
    backgroundColor: "#6c7ef5",
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  normalRadioButton: {
    borderWidth: 2,
    borderColor: colors.white,
    backgroundColor: colors.greyFont,
    borderRadius: 7,
    height: 55,
    width: '100%',
    // flex: 1,
    alignItems: 'center',
    flexDirection: 'row'

  }

})