import React from 'react';

import {useState, useLayoutEffect} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
  Alert,
  ActivityIndicator,
  Platform
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import Octi from 'react-native-vector-icons/Octicons'
import colors from '../config/colors';
// import {ImagePicker} from 'react-native-image-picker';
import defaultAvatar from '../assets/images/avatar.png';
import axios from 'axios';

const ImagePicker = require('react-native-image-picker');

const createFormData = (photo, body) => {
    const data = new FormData();
  
    data.append('photo', {
      name: photo.fileName,
      type: photo.type,
      uri:
        Platform.OS === 'android' ? photo.uri : photo.uri.replace('file://', ''),
    });
  
    Object.keys(body).forEach((key) => {
      data.append(key, body[key]);
    });
  
    console.log("Image data", data)
    return data;
  };

const AccountSettings = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: props => (
        <Text
          {...props}
          style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
          Edit Account
        </Text>
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
  const [modalVisible, setModalVisible] = useState(false);

  const [avatar, setAvatar] = useState(defaultAvatar);

  const [title, setTitle] = useState('Profile Photo');

  const [image, setImage] = useState();

  const handlePicker = async() => {

    ImagePicker.launchCamera({}, async(response) => {
          setAvatar({uri: response.assets[0].uri})

         const data = new FormData()

         data.append('image', response)
          try {
              const res = await axios.post('http://192.168.0.105:8000/uploadImage', data)
            //   const data = await res.json()
      
              console.log("RESPONSE DATA", res)
            } catch(err){
              console.log("Error", err.message)
            }
    }
    )

    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (response.error) {
    //     console.log('ImagePicker Error: ', response.error);
    //   } else if (response.customButton) {
    //     console.log('User tapped custom button: ', response.customButton);
    //   } else {
    //     setAvatar({uri: response.uri});
    //     setTitle('Updating...'); // image start to upload on server so on header set text is 'Updating..'
    //     console.log("Results", response)
        // fetch('http://localhost:3000/api/upload', {
        // fetch('http://127.0.0.1:8000'
        // {
        //   method: 'POST',
        //   headers: new Headers({
        //     'Content-Type': 'application/x-www-form-urlencoded', //Specifying the Content-Type
        //   }),
        //   body: createFormData(response, {id: '123'}),


        // }
        // )
        //   .then((data) => data.json())
        //   .then((res) => {
        //     console.log('upload succes', res);
        //     // setTitle('Profile Photo');
        //     // setAvatar({uri: response.image});
        //   })
        //   .catch((error) => {
        //     console.log('upload error', error);
        //     // setTitle('Profile Photo');
        //   });
    //   }
    // });
  };

  return (
    <View style={styles.mainContainer}>
      {/* <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalCard}>
            <View style={styles.modayBody}>
              <View style={styles.content}>
                <View style={styles.imageContainer}>
                  <Image source={require('../../assets/Icons/success.png')} />
                </View>
                <Text style={styles.modalTitle}>Success</Text>
                <Text style={styles.modalDesc}>Profile photo updated</Text>
              </View>
              <Pressable
                style={styles.modalButtonContainer}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={[styles.appButtonText, {color: '#fff'}]}>
                  Got It
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal> */}

      <View style={styles.dpSection}>
        <View style={styles.info}>
          <TouchableOpacity>
            <Image
              style={{
                width: 120,
                height: 120,
                borderRadius: 100,
                marginBottom: 20,
              }}
              source={avatar}
            />
          </TouchableOpacity>
          {/* <Button title='Change Photo'></Button> */}
          <TouchableOpacity
            style={styles.appButtonContainer}
            onPress={handlePicker}
            // onPress={chooseFile}
          >
            {/* <Image
              source={require('../../assets/Icons/editIcon.webp')}
              style={{width: 15, height: 15, marginRight: 5}}
            /> */}
            {/* <Feather name="chevron-small-right" size={20} color={colors.primary}/> */}
            <Octi name="pencil" size={20} color="#888"/>
            <Text style={styles.appButtonText}>Change Photo</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.userInfo}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Personal Info</Text>
          <TouchableOpacity>
            <View style={styles.editLink}>
                <Octi name="pencil" size={20} color='#888'/>
              <Text style={{fontSize: 14, color: '#888', marginLeft: 5, fontWeight: 'bold'}}>
                Edit
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.detailsTable}>
          <View style={styles.tableRow}>
            <Text style={styles.tHead}>First Name</Text>
            <Text style={styles.tableVal}>Bafana</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tHead}>Last Name</Text>
            <Text style={styles.tableVal}>Qwabe</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tHead}>Username</Text>
            <Text style={styles.tableVal}>bafanaQwabe</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tHead}>Phone Number</Text>
            <Text style={styles.tableVal}>Bafana</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tHead}>Location</Text>
            <Text style={styles.tableVal}>Oscar de la Cavelleria</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tHead}>Address</Text>
            <Text style={styles.tableVal}>14 Tottenham Court Road</Text>
          </View>
        </View>

        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Account Info</Text>
          <TouchableOpacity>
            <View style={styles.editLink}>
                <Octi name="pencil" size={20} color='#888'/>
              <Text style={{fontSize: 14, color: '#888', marginLeft: 5, fontWeight: 'bold'}}>
                Edit
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.accountsTable}>
          <View style={styles.tableRow}>
            <Text style={styles.tHead}>Email</Text>
            <Text style={styles.tableVal}>bafana.qwabe@gmail.com</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tHead}>Password</Text>
            <Text style={styles.tableVal}>***********</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AccountSettings;

const styles = StyleSheet.create({
  appButtonContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#eee',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalButtonContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    // flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6574CF',
    marginTop: 50,
  },
  appButtonText: {
    fontSize: 14,
    color: '#888',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    alignItems: 'center',
    marginLeft: 5,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    // alignContent: 'center'
  },
  dpSection: {
    paddingVertical: 40,
    marginHorizontal: 15,
    borderBottomWidth: 0.2,
    borderLeftColor: '#bbb',
  },
  info: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4a4a4a',
  },
  descText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#aaa',
  },
  content: {
    alignItems: 'center',
    marginVertical: 20,
  },
  cardHeader: {
    marginVertical: 15,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  editLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInfo: {
    paddingHorizontal: 15,
    flex: 1,
    justifyContent: 'center',
  },
  detailsTable: {
    flex: 6,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  accountsTable: {
    flex: 2,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tableVal: {
    textAlign: 'left',
    minWidth: 200,
    color: '#4a4a4a',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tHead: {
    color: '#999',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCard: {
    width: '80%',
    maxWidth: '90%',
    height: '50%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  modayBody: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4b4b4b',
    marginVertical: 10,
  },
  modalDesc: {
    color: '#888',
    fontWeight: 'bold',
    fontSize: 16,
  },
  imageContainer: {
    backgroundColor: '#EDFBF3',
    padding: 30,
    borderRadius: 100,
    alignItems: 'center',
  },
});
