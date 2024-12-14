import Eyeicon from '@/components/resumeprj/Eyeicon';
import { ResumeContext } from '@/context/Resumecontext';
import { useNavigation } from 'expo-router';
import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity} from 'react-native';

const SkillsForm = () => {
  const { skills, setSkills } = useContext(ResumeContext);  
   
  // Add a new skill to the list
  const addSkill = () => {
    setSkills([...skills, '']); // Add an empty skill to the array
  };

  // Update a specific skill
  const updateSkill = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  // Remove a skill from the list
  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };
  
const navigation=useNavigation();
  return (
    <View style={styles.container}>
       <Eyeicon/>
      <Text style={styles.title}>Enter Your Skills</Text>

      {/* List of Skills */}
      {skills.map((skill, index) => (
        <View key={index} style={styles.skillContainer}>
          <TextInput
            style={styles.input}
            placeholder={'Enter Skills'}
            value={skill}
            onChangeText={(text) => updateSkill(index, text)}
          />
          <Button
            title="Remove"
            color="red"
            onPress={() => removeSkill(index)}
          />
        </View>
      ))}

      {/* Add New Skill Button */}
      <Button title="Add Skill" onPress={addSkill} />

      {/* Debugging Output */}
      <Text style={styles.output}>Skills: {JSON.stringify(skills)}</Text>
      

      <TouchableOpacity style={styles.nextbtn} onPress={()=>navigation.navigate('Language')}><Text style={{ color: 'white', fontSize: 20, textAlign: 'center',  marginTop:2 }}>Next</Text></TouchableOpacity>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
     backgroundColor:'#d7fbf7',
     height:'100%'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  skillContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  output: {
    marginTop: 20,
    fontSize: 14,
    color: '#555',
  },
  nextbtn: {
    backgroundColor: '#00edd9',
 
    height: 35, 
    width: 80,
     borderRadius: 5,
      elevation:15,
      marginLeft:274.5,
      marginTop:25,
      marginBottom:30
}
});

export default SkillsForm;