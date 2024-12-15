import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import { useNavigation } from 'expo-router';
import { hobbies } from '../../data/Hobbies'
import Eyeicon from '@/components/resumeprj/Eyeicon';
import { ResumeContext } from '@/context/Resumecontext';



const Hobbies = () => {
    const [selected, setSelected] = useState([]);
    const { setHobbies } = useContext(ResumeContext); 
    const navigation = useNavigation();

    const handleHobbiesChange = (val) => {
        setSelected(val);  
        setHobbies(val);   
      };

    return (
        <View>
            <View style={styles.container}>
                <Eyeicon/>
                <MultipleSelectList 
                 setSelected={handleHobbiesChange}
                    data={hobbies}
                    label='Hobbies'
                    save='value'
                     badgeStyles={{backgroundColor:'#00edd9'}}
                     
                />
                  

                <TouchableOpacity style={styles.nextbtn} onPress={() => navigation.navigate('Experence')}><Text style={{ color: 'white', fontSize: 20, textAlign: 'center', marginTop:2  }}>Next</Text></TouchableOpacity>

                 

            </View>
        </View>
    )
}

export default Hobbies
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
})