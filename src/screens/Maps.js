import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, Pressable, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import colors from '../config/colors';
import { useNavigation } from '@react-navigation/native';
import { doctors } from '../config/dummy';
import Fa from 'react-native-vector-icons/FontAwesome';





const Item = ({ name, distance, ratings, image, reviews, type, video, navigation, index, item }) => (
  <Pressable activeOpacity={0.5} style={{ marginLeft: index === 0 ? 15 : 0, marginRight: index === doctors.length - 1 ? 15 : 0, borderTopColor: colors.primary, borderTopWidth: 2, elevation: 3, padding: 15, alignItems: 'center', backgroundColor: colors.white }}>
    <View activeOpacity={0.5} >
      <Image style={{
        width: 75,
        height: 75,
        borderRadius: 100,
        resizeMode: 'contain',
      }}
        source={image}
      />
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 15, backgroundColor: colors.lightGrey, paddingVertical: 2, paddingHorizontal: 7, borderRadius: 4 }}>
      <Fa style={{ marginRight: 5 }} size={15} color={colors.primary} name={'star'} />
      <Text style={{ fontSize: 15, color: colors.primary, fontWeight: '500' }}>{ratings}</Text>
    </View>
    <View  >
      <Text style={{ fontSize: 18, fontWeight: '400', color: colors.black, marginBottom: 2 }}>{name}</Text>
    </View>
    <Text style={{ fontSize: 15, fontWeight: '400', color: colors.greyFont }}>{type}</Text>
    <View style={{ marginTop: 15, padding: 5, borderColor: colors.primary, borderWidth: 1, borderRadius: 4, backgroundColor: colors.lightGrey }}>
      <Text style={{ fontSize: 10, color: colors.primary }}>AVAILABLE SPOTS</Text>
    </View>
  </Pressable >
);



export default function Maps() {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      //   headerLeft: () => (
      //     <Pressable
      //       onPress={() => alert('Left Menu Clicked')}
      //       style={{marginRight: 20, alignItems: 'center'}}>
      //         <Feather name='arrow-left' size={20} color={colors.white}/>
      //     </Pressable>
      //   ),
      headerRight: () => (
        <Pressable
          // onPress={() => navigation.goBack()}
          style={{ marginLeft: 10 }}>
          <Feather name='filter' size={20} color={colors.white} />
        </Pressable>
      ),

      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: colors.primary, //Set Header color
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
      },
      headerTintColor: colors.white,
    });
  }, [navigation]);



  const renderItem = ({ item, index }) => (
    <Item name={item.name}
      distance={item.distance}
      type={item.type}
      address={item.address}
      ratings={item.ratings}
      reviews={item.reviews}
      experience={item.experience}
      fees={item.fees}
      location={item.location}
      online={item.online}
      video={item.video}
      image={item.image}
      navigation={navigation}
      index={index}
      item={item} />
  );


  return (
    <SafeAreaView style={{ flex: 1, position: 'relative' }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <View style={{ paddingTop: 2, paddingHorizontal: 20, height: 75, backgroundColor: colors.primary, }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', height: 50, borderColor: colors.lightGrey, borderWidth: 1, borderRadius: 4, backgroundColor: colors.purple }}>
          <TextInput
            placeholder="Search Doctors, Clinics ..."
            placeholderTextColor={colors.white}
            style={{ color: colors.white, fontSize: 16, paddingLeft: 10, flex: 1 }} />
          <Feather style={{ marginRight: 15, marginLeft: 10 }} size={20} color={colors.white} name={'search'} />
        </View>
      </View>
      <View style={{ position: 'absolute', bottom: 15, zIndex: 1 }}>
        <View style={{ marginVertical: 15, marginLeft: 15 }}>
          <Text style={{ color: colors.black, fontSize: 20 }}>New York</Text>
          <Text style={{ color: colors.black, fontSize: 12, marginTop: 7 }}>{doctors.length - 1} available</Text>
        </View>
        <FlatList
          data={doctors}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          ItemSeparatorComponent={() => (
            <View style={{ width: 15, height: '100%' }}></View>
          )}
        />
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})