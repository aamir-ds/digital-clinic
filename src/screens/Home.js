import { FlatList, StyleSheet, Text, TextInput, Pressable, View, StatusBar } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { homePageListing } from '../config/dummy';
import { SafeAreaView } from 'react-native-safe-area-context';


const Emergency = () => (
  <Pressable android_ripple={{ color: colors.redIcon, borderless: false, radius: 177 }} style={{ marginVertical: 20, paddingHorizontal: 15, paddingVertical: 15, alignItems: 'center', height: 80, width: '100%', backgroundColor: colors.white, borderRadius: 4, flexDirection: 'row' }}>
    <View style={{ justifyContent: 'center', alignItems: 'center', height: 50, width: 50, backgroundColor: colors.lightOrange, borderRadius: 5 }}>
      <Fontisto size={30} color={colors.redIcon} name={'bandage'} />

    </View>
    <View style={{ flex: 1, marginLeft: 15 }}>
      <Text style={{ fontSize: 15, color: colors.black, fontWeight: '500' }}>Emergency</Text>
      <Text style={{ fontSize: 12, color: colors.greyFont }}>Short Description</Text>
    </View>
    <MaterialIcons style={{ marginRight: 5, marginLeft: 10 }} size={18} color={colors.greyFont} name={'arrow-forward-ios'} />
  </Pressable>
)

const Item = ({ name, id, description, index, icon, navigate, navigation }) => (
  <Pressable
    android_ripple={{ color: colors.primary, borderless: false, radius: 110 }}
    onPress={() => navigation.navigate(navigate)}
    style={[{ height: 150, width: '47%', backgroundColor: colors.white, padding: 15, borderRadius: 4 }, index % 2 !== 0 && { marginLeft: 20 }]}>
    <View style={{ flex: 1 }}>
      <View style={{
        backgroundColor: colors.lightGrey,
        height: 50,
        width: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <MaterialCommunityIcons size={35} color={colors.primary} name={icon} />
      </View>
    </View>
    <View>
      <Text style={{ fontWeight: '500', color: colors.black, fontSize: 15 }}>{name}</Text>
      <Text style={{ fontWeight: '400', color: colors.greyFont, fontSize: 12 }}>{description}</Text>
    </View>
  </Pressable >
)


const Home = ({ navigation }) => {
  const renderItem = ({ item, index }) => (
    <Item name={item.name}
      description={item.description}
      id={item.id}
      index={index}
      icon={item.icon}
      navigate={item.navigate}
      navigation={navigation}
    />
  );


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.lightGrey }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />

      <View style={{ paddingTop: 2, paddingHorizontal: 20, height: 65, backgroundColor: colors.primary, }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', height: 45, borderColor: colors.lightGrey, borderWidth: 1, borderRadius: 4, backgroundColor: colors.purple }}>
          <TextInput
            placeholder="Search Doctors, Clinics ..."
            placeholderTextColor={colors.white}
            style={{ color: colors.white, fontSize: 14, paddingLeft: 10, flex: 1 }} />
          <Feather style={{ marginRight: 15, marginLeft: 10 }} size={20} color={colors.white} name={'search'} />
        </View>
      </View>
      <View style={{ paddingHorizontal: 20, }}>

        <FlatList
          style={{ flexWrap: 'wrap' }}
          data={homePageListing}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (
            <View style={{ height: 20 }}></View>
          )}
          ListHeaderComponent={Emergency}
        />
      </View>

    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})