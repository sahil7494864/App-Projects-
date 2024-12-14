// screens/Experience.js
import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from 'expo-router';
 // Import ResumeContext
import Eyeicon from '@/components/resumeprj/Eyeicon';
import { ResumeContext } from '@/context/Resumecontext';

const Experience = () => {
  const [experienceList, setExperienceList] = useState([
    { Job_Title: '', Company_Name: '', startYear: '', endYear: '', City: '', Description: '' },
  ]);

  const { setExperience } = useContext(ResumeContext); // Access setExperience function from context
  const navigation = useNavigation();

  const handleInputChange = (index, key, value) => {
    const updatedList = [...experienceList];
    updatedList[index][key] = value;
    setExperienceList(updatedList);
  };

  const addExperience = () => {
    setExperienceList([
      ...experienceList,
      { Job_Title: '', Company_Name: '', startYear: '', endYear: '', City: '', Description: '' },
    ]);
  };

  const removeExperience = (index) => {
    const updatedList = experienceList.filter((_, i) => i !== index);
    setExperienceList(updatedList);
  };

  const handleSubmit = () => {
    setExperience(experienceList); // Update global context with the experience data
   Alert.alert('Details Submitted Succssfully')
    // You can also send this data to a server or save locally
  };

  return (
    <ScrollView style={styles.container}>
      <Eyeicon />
      {experienceList.map((experience, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.label}>Job Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Job Title"
            value={experience.Job_Title}
            onChangeText={(text) => handleInputChange(index, 'Job_Title', text)}
          />
          <Text style={styles.label}>Company Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Company Name"
            value={experience.Company_Name}
            onChangeText={(text) => handleInputChange(index, 'Company_Name', text)}
          />
          <Text style={styles.label}>Start Year</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Start Year"
            keyboardType="numeric"
            value={experience.startYear}
            onChangeText={(text) => handleInputChange(index, 'startYear', text)}
          />
          <Text style={styles.label}>End Year</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter End Year"
             
            value={experience.endYear}
            onChangeText={(text) => handleInputChange(index, 'endYear', text)}
          />
          <Text style={styles.label}>City</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter City"
            value={experience.City}
            onChangeText={(text) => handleInputChange(index, 'City', text)}
          />
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.Description, styles.input]}
            placeholder="Enter Description"
            value={experience.Description}
            multiline={true}
            
            numberOfLines={5}
            onChangeText={(text) => handleInputChange(index, 'Description', text)}
          />
          {experienceList.length > 1 && (
            <Button title="Remove" onPress={() => removeExperience(index)} color="red" />
          )}
        </View>
      ))}
      
      <Button title="Add Experience" onPress={addExperience} />
       
      <TouchableOpacity onPress={handleSubmit}
                style={styles.nextbtn}>
                <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', marginTop: 2 }}>
                   Submit
                </Text>
                </TouchableOpacity>
      <TouchableOpacity style={styles.nextbtn} onPress={() => navigation.navigate('Objective')}>
        <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', marginTop: 2 }}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#d7fbf7',
  },
  card: {
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  label: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
  submitButton: {
    marginTop: 20,
  },
  nextbtn: {
    backgroundColor: '#00edd9',
    height: 35,
    width: 80,
    borderRadius: 5,
    elevation: 15,
    marginLeft: 274.5,
    marginTop: 5,
    marginBottom:25
},
  Description: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default Experience;
