import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation } from 'expo-router'
import Eyeicon from '@/components/resumeprj/Eyeicon';
import { ResumeContext } from '@/context/Resumecontext';

const About = () => {
  const { about, setAbout } = useContext(ResumeContext)
  const { selectedTemplate } = useContext(ResumeContext);

  const [localData, setLocalData] = useState(about);
  const navigation = useNavigation();
  const handlesubmit=()=>{
    setAbout(localData);
      Alert.alert('Details Submitted Succssfully');
    }

  const handleGenerateResume = () => {
    switch (selectedTemplate) {
      case 'T1Resume':
        navigation.navigate('T1Resume');
        break;
      case 'T2Resume':
        navigation.navigate('T2Resume');
        break;
      case 'T3Resume':
        navigation.navigate('T3Resume');
        break;
      case 'T4Resume':
        navigation.navigate('T4Resume');
        break;
      case 'T5Resume':
        navigation.navigate('T5Resume');
        break;
      case 'T6Resume':
        navigation.navigate('T6Resume');
        break;
      case 'T7Resume':
        navigation.navigate('T7Resume');
        break;
      case 'T8Resume':
        navigation.navigate('T8Resume');
        break;
      
      default:
        alert('Please Selecte Template');

    }
  }
  return (
    <View style={styles.container}>
      <Eyeicon />
      <Text style={styles.label}>ABOUT YOU</Text>
      <TextInput
        style={styles.about}
        placeholder='About you/Profile details'
        numberOfLines={5}
        multiline={true}
        value={localData.about}
        onChangeText={(text) => setLocalData({ ...localData, about: text })}

      />
      <TouchableOpacity onPress={handlesubmit}
        style={styles.nextbtn}>
        <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', marginTop: 2 }}>
          Submit
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.nextbtn} onPress={handleGenerateResume}><Text style={{ color: 'white', fontSize: 12, textAlign: 'center' }}>Generate Resume</Text></TouchableOpacity>


    </View>
  )
}
const styles = StyleSheet.create({
  about: {
    height: 100,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 15,


  },
  container: {
    padding: 20,
    backgroundColor: '#d7fbf7',
    height: '100%'
  },
  label: {

    fontSize: 16,
    fontWeight: 'bold',
  },
  nextbtn: {
    backgroundColor: '#00edd9',
    height: 35,
    // width: 80,
    borderRadius: 5,
    elevation: 15,
    marginLeft: 274.5,
    marginTop: 5,
    marginBottom: 25
  },
})

export default About;