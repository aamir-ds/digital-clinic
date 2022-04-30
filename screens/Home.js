import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { homePageListing } from '../config/dummy';


const Emergency = () => (
  <View style={{ marginVertical: 20, paddingHorizontal: 10, alignItems: 'center', height: 80, width: '100%', backgroundColor: colors.white, borderRadius: 3, flexDirection: 'row' }}>
    <View style={{ justifyContent: 'center', alignItems: 'center', height: 60, width: 60, backgroundColor: colors.lightGrey, borderRadius: 5 }}>
      <Fontisto size={40} color={colors.red} name={'bandage'} />

    </View>
    <View style={{ flex: 1, marginLeft: 20 }}>
      <Text style={{ fontSize: 17, color: colors.black }}>Emergency</Text>
      <Text style={{ fontSize: 13, color: colors.greyFont }}>Short Description</Text>
    </View>
    <MaterialIcons style={{ marginRight: 15, marginLeft: 10 }} size={20} color={colors.greyFont} name={'arrow-forward-ios'} />
  </View>
)

const Item = ({ name, id, description, index, icon, navigate, navigation }) => (
  <TouchableOpacity
    // onPress={() => navigation.navigate(navigate)} 
    style={[{ height: 150, width: '47%', backgroundColor: colors.white, padding: 10 }, index % 2 !== 0 && { marginLeft: 20 }]}>
    <View style={{ flex: 1 }}>
      <View style={{
        backgroundColor: colors.lightGrey,
        height: 55,
        width: 55,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <MaterialCommunityIcons size={42} color={colors.primary} name={icon} />
      </View>
    </View>
    <View>
      <Text style={{ fontWeight: '500', color: colors.black }}>{name}</Text>
      <Text style={{ fontWeight: '400', color: colors.greyFont }}>{description}</Text>
    </View>
  </TouchableOpacity >
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
    <View>
      <View style={{ paddingTop: 2, paddingHorizontal: 20, width: '100%', height: 75, backgroundColor: colors.primary, position: 'relative', bottom: 1, zIndex: 1 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', height: 50, borderColor: colors.lightGrey, borderWidth: 1, borderRadius: 4, }}>
          <TextInput
            placeholder="Search Doctors, Clinics ..."
            placeholderTextColor={colors.white}
            style={{ color: colors.white, fontSize: 16, paddingLeft: 10, flex: 1 }} />
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

    </View>
  )
}

export default Home

const styles = StyleSheet.create({})