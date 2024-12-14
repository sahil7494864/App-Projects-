// screens/Language.js
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import { useNavigation } from 'expo-router';
import Eyeicon from '@/components/resumeprj/Eyeicon';
import { ResumeContext } from '@/context/Resumecontext';
  // Import ResumeContext

export default function Language() {
  const [selected, setSelected] = useState([]);
  const { setLanguages } = useContext(ResumeContext);  // Access setLanguages from context

  const Language = [
    { key: 1, value: 'English' },
    { key: 2, value: 'Hindi' },
    { key: 3, value: 'Urdu' },
    { key: 4, value: 'Spanish' },
    { key: 5, value: 'French' },
    { key: 6, value: 'Arabic' },
    { key: 7, value: 'Bengali' },
    { key: 8, value: 'Russian' },
    { key: 9, value: 'Portuguese' },
    { key: 10, value: 'Chinese' },
    { key: 11, value: 'Japanese' }
  ];

  const navigation = useNavigation();

  // When the user selects languages, update the global context
  const handleLanguageChange = (val) => {
    setSelected(val);  // Update local state
    setLanguages(val);  // Update global context
  };

  return (
    <View style={styles.container}>
      <Eyeicon />
      <MultipleSelectList
        setSelected={handleLanguageChange}
        data={Language}
        label="Languages"
        save="value"
        badgeStyles={{ backgroundColor: '#00edd9' }}
      />

      <TouchableOpacity style={styles.nextbtn} onPress={() => navigation.navigate('Hobbies')}>
        <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', marginTop: 2 }}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#d7fbf7',
    padding: 20
  },
  nextbtn: {
    backgroundColor: '#00edd9',
    height: 35,
    width: 80,
    borderRadius: 5,
    elevation: 15,
    marginLeft: 274.5,
    marginTop: 25
  }
});
