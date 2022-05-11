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
import defaultAvatar from '../assets/images/avatar.png';
import DocumentPicker from "react-native-document-picker";

const AccountSettings = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: props => (
        <Text
          {...props}
          style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
            Profile
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

  const [avatar, setAvatar] = useState(defaultAvatar);

  const docPicker= async() => {
    // Pick a single file
    try {
      const res = await DocumentPicker.pick({
       //by using allFiles type, you will able to pick any type of media from user device, 
    //There can me more options as well
    //DocumentPicker.types.images: All image types
    //DocumentPicker.types.plainText: Plain text files
    //DocumentPicker.types.audio: All audio types
   //DocumentPicker.types.pdf: PDF documents
   //DocumentPicker.types.zip: Zip files
   //DocumentPicker.types.csv: Csv files
   //DocumentPicker.types.doc: doc files
   //DocumentPicker.types.docx: docx files
  //DocumentPicker.types.ppt: ppt files
  //DocumentPicker.types.pptx: pptx files
  //DocumentPicker.types.xls: xls files
  //DocumentPicker.types.xlsx: xlsx files
  //For selecting more more than one options use the 
 //type: [DocumentPicker.types.csv,DocumentPicker.types.xls]
         type: [DocumentPicker.types.allFiles],
      });
      console.log("Document uploaded",res[0]
      );

      setAvatar({uri: res[0].uri})
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("error -----", err);
      } else {
        throw err;
      }
    }
  }

  return (
    <View style={styles.mainContainer}>

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
          <TouchableOpacity
            style={styles.appButtonContainer}
            onPress={docPicker}
          >
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
