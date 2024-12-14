import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from 'expo-router';
import { ResumeContext } from '@/context/Resumecontext';
const Eyeicon = () => {
  const { selectedTemplate } = useContext(ResumeContext);
  const navigation = useNavigation();
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
    <TouchableOpacity onPress={handleGenerateResume} style={{ position: 'relative', left: 315 }}>
      <Icon name="eye" size={35} color="#00edd9" />
    </TouchableOpacity>

  )
}

export default Eyeicon