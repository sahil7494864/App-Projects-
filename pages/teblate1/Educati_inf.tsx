import Eyeicon from '@/components/resumeprj/Eyeicon';
import { ResumeContext } from '@/context/Resumecontext';
import { useNavigation } from 'expo-router';
import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView,TouchableOpacity, Alert} from 'react-native';

const EducationForm = ({navigation}) => {
  const { educationDetails, setEducationDetails } = useContext(ResumeContext);


  const [educationList, setEducationList] = useState(educationDetails);

  
  const handleInputChange = (index, field, value) => {
    const updatedList = [...educationList];
    updatedList[index][field] = value;
    setEducationList(updatedList); // Update local state

    // Also update the global context state
    
  };

  const addEducation = () => {
    const newEducation = { institution: '', degree: '', startYear: '', endYear: '',CGPA:'', };
    const updatedList = [...educationList, newEducation];
    setEducationList(updatedList);
    // Update global context
  };

  const removeEducation = (index) => {
    const updatedList = educationList.filter((_, i) => i !== index);
    setEducationList(updatedList);
   // Update global context 
  };

  const handleSubmit = () => {
    
    Alert.alert('Details Submitted Succssfully');// Update global context with the experience data
    setEducationDetails(educationList);
  

    // Here you can submit the education data to the server or save it somewhere
  };
 
  return (
    <ScrollView style={styles.container}>
      <Eyeicon/>
      {educationList.map((education, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.label}>Institution</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter institution name"
            value={education.institution}
            onChangeText={(text) => handleInputChange(index, 'institution', text)}
          />
          <Text style={styles.label}>Degree</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter degree"
             

            value={education.degree}
            onChangeText={(text) => handleInputChange(index, 'degree', text)}
          />
          <Text style={styles.label}>Field of Study</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter field of study"
            value={education.fieldOfStudy}
            onChangeText={(text) => handleInputChange(index, 'fieldOfStudy', text)}
          />
          <Text style={styles.label}>Start Year</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter start year"
            keyboardType="numeric"
            value={education.startYear}
            onChangeText={(text) => handleInputChange(index, 'startYear', text)}
          />
          <Text style={styles.label}>End Year</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter end year"   
            value={education.endYear}
            onChangeText={(text) => handleInputChange(index, 'endYear', text)}
          />
          <Text style={styles.label}>Final CGPA</Text>
            <TextInput
            style={styles.input}
            placeholder="Final CGPA / Pursuing"
           
            value={education.CGPA}
            onChangeText={(text) => handleInputChange(index, 'CGPA', text)}
          />

          {educationList.length > 1 && (
            <Button title="Remove" onPress={() => removeEducation(index)} color="red" />
          )}
        </View>
      ))}
      <Button title="Add Education" onPress={addEducation} />
     
      <TouchableOpacity onPress={handleSubmit}
                style={styles.nextbtn}>
                <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', marginTop: 2 }}>
                   Submit
                </Text>
                </TouchableOpacity>

      <TouchableOpacity style={styles.nextbtn} onPress={()=>navigation.navigate('skills')}><Text style={{ color: 'white', fontSize: 20, textAlign: 'center', marginTop:2  }}>Next</Text></TouchableOpacity>
     
     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor:'#d7fbf7'
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
}
});

export default EducationForm