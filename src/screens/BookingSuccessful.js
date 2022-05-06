import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../config/colors'

const BookingSuccessful = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.bookingSection}>
        <View style={styles.roundedImage}>
          <Image source={require('../assets/images/booking.png')} />
        </View>
        <View style={styles.midSection}>
          <Text style={styles.title}>Booking Successful</Text>
          <Text style={styles.subtitle}>Your booking has been successful, the reminder is set automatically</Text>
          <TouchableOpacity style={styles.viewDetails} activeOpacity="0.7">
            <Text style={styles.link}>View Details</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home Page')} style={styles.button}>
        <Text style={styles.buttonText}>GOT IT</Text>
      </TouchableOpacity>

    </View>
  )
}

export default BookingSuccessful

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 18,
  },
  bookingSection: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
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
    marginVertical: 30
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.black,
    lineHeight: 30
  },
  subtitle: {
    fontSize: 16,
    color: colors.darkGrey,
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 10,
    marginHorizontal: 15,
    fontWeight: '500'
  },
  viewDetails: {
    marginTop: 20
  },
  link: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold'
  },
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
    fontWeight: 'bold'
  }

})