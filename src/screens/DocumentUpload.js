import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React, {useState} from 'react';
import colors from '../config/colors';
import DocumentPicker from "react-native-document-picker";
import defaultAvatar from '../assets/images/avatar.png';

const DocumentUpload = () => {

    const [pdfFile, setPdf] = useState({})
    const [imgFile, setImg] = useState({})
    const [vidFile, setVid] = useState({})
    const [xlsFile, setXls] = useState({})
    const [imageUrl, setImage] = useState(defaultAvatar)

    const uploadPDF = async () => {
        try {
            const res = await DocumentPicker.pick({
               type: [DocumentPicker.types.pdf],
            });
            console.log("Document uploaded",res[0]
            );

            setPdf(res[0])

          } catch (err) {
            if (DocumentPicker.isCancel(err)) {
              console.log("error -----", err);
            } else {
              throw err;
            }
          }
    }

    const uploadImage = async () => {
        try {
            const res = await DocumentPicker.pick({
               type: [DocumentPicker.types.images],
            });
            console.log("Document uploaded",res[0]
            );

            setImg(res[0])
            setImage({uri: res[0].uri})

          } catch (err) {
            if (DocumentPicker.isCancel(err)) {
              console.log("error -----", err);
            } else {
              throw err;
            }
          }
    }

    const uploadVideo = async () => {
        try {
            const res = await DocumentPicker.pick({
               type: [DocumentPicker.types.video],
            });
            console.log("Document uploaded",res[0]
            );

            setVid(res[0])

          } catch (err) {
            if (DocumentPicker.isCancel(err)) {
              console.log("error -----", err);
            } else {
              throw err;
            }
          }
    }

    const uploadXLS = async () => {
        try {
            const res = await DocumentPicker.pick({
               type: [DocumentPicker.types.xls],
            });
            console.log("Document uploaded",res[0]
            );

            setXls(res[0])

          } catch (err) {
            if (DocumentPicker.isCancel(err)) {
              console.log("error -----", err);
            } else {
              throw err;
            }
          }
    }

  return (
    <View style={styles.container}>
      <Pressable
      style={styles.button} 
      onPress={uploadPDF}>
        <Text style={styles.btnText}>Upload PDF</Text>
      </Pressable>
      <Pressable
      style={styles.button} 
      onPress={uploadImage}>
        <Text style={styles.btnText}>Upload Image</Text>
      </Pressable>
      <Pressable
      style={styles.button} 
      onPress={uploadVideo}>
        <Text style={styles.btnText}>Upload Video</Text>
      </Pressable>
      <Pressable
      style={styles.button} 
      onPress={uploadXLS}>
        <Text style={styles.btnText}>Upload Excelsheet</Text>
      </Pressable>

      <View style={styles.content}>
        <View style={styles.section}>
            <Text style={styles.title}>PDF File Description: </Text>
            <Text style={styles.description}>Size: {pdfFile.size}</Text>
            <Text style={styles.description}>Type: {pdfFile.type}</Text>
            <Text style={styles.description}>URI: {pdfFile.uri}</Text>
            {/* <Image style={{height: 100, width: 100}} source={imageUrl}/> */}
        </View>
        <View style={styles.section}>
            <Text style={styles.title}>Image File Description: </Text>
            <Text style={styles.description}>Size: {imgFile.size}</Text>
            <Text style={styles.description}>Type: {imgFile.type}</Text>
            <Text style={styles.description}>URI: {imgFile.uri}</Text>
            <Image style={{height: 100, width: 100}} source={imageUrl}/>
        </View>
        <View style={styles.section}>
            <Text style={styles.title}>Video File Description: </Text>
            <Text style={styles.description}>Size: {vidFile.size}</Text>
            <Text style={styles.description}>Type: {vidFile.type}</Text>
            <Text style={styles.description}>URI: {vidFile.uri}</Text>
            {/* <Image style={{height: 100, width: 100}} source={imageUrl}/> */}
        </View>
        <View style={styles.section}>
            <Text style={styles.title}>Excel File Description: </Text>
            <Text style={styles.description}>Size: {xlsFile.size}</Text>
            <Text style={styles.description}>Type: {xlsFile.type}</Text>
            <Text style={styles.description}>URI: {xlsFile.uri}</Text>
            {/* <Image style={{height: 100, width: 100}} source={imageUrl}/> */}
        </View>
      </View>
    </View>
  )
}

export default DocumentUpload;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
    },
    button: {
        backgroundColor: colors.primary,
        // borderRadius: 4,
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        marginBottom: 10
    },
    btnText: {
        color: colors.white,
        fontSize: 14
    },
    content: {
        flex:1,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    section: { 
        marginBottom: 10
    },
    title: {
        fontWeight: 'bold',
        color: colors.black
    },
    description: {
        color: colors.black
    }
})


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