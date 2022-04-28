import React, {useLayoutEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-vector-icons/FontAwesome';

const DoctorProfile = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
        //   headerTitle: props => (
        //     <Text
        //       {...props}
        //       style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
        //       Doctor's Profile
        //     </Text>
        //   ),

          headerLeft: () => (
            <TouchableOpacity
              onPress={() => alert('Left Menu Clicked')}
              style={{marginLeft: 10}}>
              {/* <Text style={{color: 'white'}}>Left Menu</Text> */}
              <Icon name='arrow-left'/>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => alert('Right Menu Clicked')}
              style={{marginRight: 10}}>
              <Text style={{color: 'white'}}>Right Menu</Text>
            </TouchableOpacity>
          ),

          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#6574CF', //Set Header color
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerTintColor: '#fff',
        });
      }, [navigation]);
  return (
    <View>
      <Text>DoctorProfile</Text>
    </View>
  )
}

export default DoctorProfile;

const styles = StyleSheet.create({})
