import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from 'expo-router'
import { ResumeContext } from '@/context/Resumecontext';
import { template } from '@babel/core';

const Home = () => {
  const navigation = useNavigation();
  const {setSelectedTemplate}=useContext(ResumeContext);
  return (<>
    <Text style={styles.header}>Select Tamplate</Text>
    <View style={{ backgroundColor: '#d7fbf7', height: '100%', }}>
<ScrollView> 
      <View style={styles.tempbox}>
        <TouchableOpacity onPress={()=>{setSelectedTemplate('T1Resume');navigation.navigate('templ1')}}> 
        <Image source={require('../../assets/images/resumetemplateimg/temp1n.png')}
          style={styles.tempimg} />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{setSelectedTemplate('T2Resume');navigation.navigate('templ1')}}> 
         <Image source={require('../../assets/images/resumetemplateimg/tempn1_files/1131w-TP46smzU0OM.webp')}
          style={styles.tempimg} />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{setSelectedTemplate('T3Resume');navigation.navigate('templ1')}}> 
          <Image source={require('../../assets/images/resumetemplateimg/tempn1_files/temp3.jpg')}
          style={styles.tempimg} />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{setSelectedTemplate('T4Resume');navigation.navigate('templ1')}}> 
          <Image source={require('../../assets/images/resumetemplateimg/tempn1_files/canva-minimalist-white-and-grey-professional-resume-KjN0Z-p3Mo8.jpg')}
          style={styles.tempimg} />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{setSelectedTemplate('T5Resume');navigation.navigate('templ1')}}> 
          <Image source={require('../../assets/images/resumetemplateimg/tempn1_files/canva-white-and-black-tech-professional-resume-BxR9Mg-FAC4.jpg')}
          style={styles.tempimg} />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{setSelectedTemplate('T6Resume');navigation.navigate('templ1')}}> 
          <Image source={require('../../assets/images/resumetemplateimg/tempn1_files/canva-black-and-white-corporate-resume-SFKBA-xgtTs.jpg')}
          style={styles.tempimg} />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{setSelectedTemplate('T7Resume');navigation.navigate('templ1')}}> 
          <Image source={require('../../assets/images/resumetemplateimg/tempn1_files/canva-blue-and-white-professional-corporate-resume-rXppN-W2O80.jpg')}
          style={styles.tempimg} />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{setSelectedTemplate('T8Resume');navigation.navigate('templ1')}}> 
          <Image source={require('../../assets/images/resumetemplateimg/tempn1_files/canva-gray-and-white-simple-clean-resume-C_dNdg7kOQg.jpg')}
          style={styles.tempimg} />
          </TouchableOpacity>

        
      </View>
      </ScrollView>
    </View>
  </>
  )
}

export default Home

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: '#00edd9',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    elevation:5
  },
  tempbox: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection:'row',
    margin:10,
    gap:10,
    paddingBottom:50
  },
  tempimg :{
    borderRadius:10,
    height:250,
    width:180,
   elevation:5
  }
});