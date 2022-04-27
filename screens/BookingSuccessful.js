import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const BookingSuccessful = () => {
  return (
    <View style={styles.container}>

    <View style={styles.bookingSection}>
      <View style={styles.roundedImage}>
        <Image source={require('../assets/images/booking.png')}/>
      </View>

      <View style={styles.midSection}>
        <Text style={styles.title}>Booking Successful</Text>
        <Text style={styles.subtitle}>Your booking has been successful, the reminder is set automatically</Text>
      </View>
      <TouchableOpacity style={styles.viewDetails} activeOpacity="0.7">
        <Text style={styles.link}>View Details</Text>
      </TouchableOpacity>

    </View>
      <View>
        <Button title='Got it' color="#6574CF"></Button>
      </View>
    </View>
  )
}

export default BookingSuccessful

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  bookingSection: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%'
  },
  roundedImage: {
    padding: 35,
    backgroundColor: '#F3F4FC',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100
  },
  midSection: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    lineHeight: 30
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 10
  },
  viewDetails: {
    marginTop: 20
  },
  link: {
    color: '#6574CF',
    fontSize: 16,
    fontWeight: 'bold'
  }
})