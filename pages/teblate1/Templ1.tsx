import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useContext,useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Eyeicon from '@/components/resumeprj/Eyeicon';
import { ResumeContext } from '@/context/Resumecontext';
 
const Templ1 = ({navigation}) => {
const {personalData,setPersonalData}=useContext(ResumeContext)
  
  const [localData, setLocalData] = useState(personalData);

  const handlesubmit=()=>{
    if (!localData.name || !localData.lastName || !localData.profession || !localData.phone || !localData.email || !localData.adress || !localData.nationality || !localData.dob ){
        Alert.alert('field all fields')
        return;
         
    }
    setPersonalData(localData);
    Alert.alert('Details Submitted Succssfully');
    navigation.navigate('Educati_inf')
  }
    return (<> 
    <View style={{backgroundColor: '#d7fbf7',paddingLeft:20,paddingTop:10}}> 
        <Eyeicon/></View>
        <View style={{ backgroundColor: '#d7fbf7', height: '100%',alignItems:'center'}}>
          
        <TextInput 
       placeholder="Name"
      style={styles.input}
        value={localData.name}
        onChangeText={(text) => setLocalData({...localData, name: text })}
      />
       <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={localData.lastName}
                onChangeText={(text) => setLocalData({...localData, lastName:text})}
            />
            <TextInput
                style={styles.input}
                placeholder="Profession"
                value={localData.profession}
                onChangeText={(text) => setLocalData({...localData, profession:text})}

            />
            <TextInput
                style={styles.input}
                placeholder="Phone no."
                keyboardType="numeric"
                value={localData.phone}
                onChangeText={(text) => setLocalData({...localData, phone:text})}
                

            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={localData.email}
                onChangeText={(text) => setLocalData({...localData,email:text})}


            />
            <TextInput
                style={styles.input}
                placeholder="Adress"
                value={localData.adress}
                onChangeText={(text) => setLocalData({...localData, adress:text})}


            />
            <TextInput
                style={styles.input}
                placeholder="Nationality"
                value={localData.nationality}
                onChangeText={(text) => setLocalData({...localData, nationality:text})}


            />
            <TextInput
                style={styles.input}
                placeholder="Data of Birth"
                keyboardType="numeric"
                value={localData.dob}
                onChangeText={(text) => setLocalData({...localData, dob:text})}


            /> 
             <TouchableOpacity onPress={handlesubmit}
                style={styles.nextbtn}>
                <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', marginTop: 2 }}>
                   Submit
                </Text>
                </TouchableOpacity>


             

                


             
        </View>
        
        </>
    )
}
export default Templ1

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#d7fbf7',
        height: 50,
        width: '90%',
        borderColor: 'black',
        borderWidth: 0.2,
        borderRadius: 15,
        marginTop: 20,
        paddingLeft: 20,
        elevation: 15,
        
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
})