import { View, Text, TextInput, StyleSheet,TouchableOpacity, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation } from 'expo-router'
import Eyeicon from '@/components/resumeprj/Eyeicon';
import { ResumeContext } from '@/context/Resumecontext';

const Objective = () => {
  const {objective,setObjective}=useContext(ResumeContext)
  
  const [localData, setLocalData] = useState(objective);
    const navigation=useNavigation();
    const handlesubmit=()=>{
        setObjective(localData);
        Alert.alert('Details Submitted Succssfully');
      }
  return (
    <View style={styles.container}>
      <Eyeicon/>
        <Text style={styles.label}>Objective</Text>
        <TextInput
        style={styles.Objective}
        placeholder='Enter Objective'
        numberOfLines={5}
        multiline={true}
        value={localData.Objective}
        onChangeText={(text) => setLocalData({...localData, Objective: text })}
        
        />
          <TouchableOpacity onPress={handlesubmit}
                style={styles.nextbtn}>
                <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', marginTop: 2 }}>
                   Submit
                </Text>
                </TouchableOpacity>
 
        <TouchableOpacity style={styles.nextbtn} onPress={()=>navigation.navigate('about')}><Text style={{ color: 'white', fontSize: 20, textAlign: 'center', marginTop:2}}>Next</Text></TouchableOpacity>

         
    </View>
  )
}
const styles=StyleSheet.create({
    Objective:{
        height:100,
textAlignVertical:'top',
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 5,
padding: 10,
marginTop: 15,


    },
    container: {
        padding: 20,
        backgroundColor:'#d7fbf7',
        height:'100%'
      },
      label: {
        
        fontSize: 16,
        fontWeight: 'bold',
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
})

export default Objective