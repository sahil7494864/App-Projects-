import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { ResumeContext } from '@/context/Resumecontext';
import { useNavigation } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function T2resume() {
    const navigation = useNavigation();
    const { personalData, educationDetails, skills, languages, hobbies, experience, about } = useContext(ResumeContext);
    return (
        <View style={styles.container}>
          <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}>Take Screnshot and Crop</Text>

          <View style={styles.resume}>


            <View style={styles.firstcontent}>
                <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>{personalData.name} {personalData.lastName}</Text>
              <Text style={{ textAlign: 'center', fontSize: 15, color: '#898f96', fontWeight: 500 }}>{personalData.profession}</Text>

              </View>

            <View style={styles.secondcont}>
            <Text style={styles.heading}>CONTACT</Text>
              <View style={styles.item}>
                <Icon name="phone" size={12} color="#8e6266" />
                <Text style={styles.headtext}>{personalData.phone}</Text>
              </View>
              <View style={styles.item}>
                <Icon name="envelope" size={12} color="#8e6266" />
                <Text numberOfLines={1} style={styles.headtext}>{personalData.email}</Text>
              </View>
              <View style={styles.item}>
                <Icon name="map-marker" size={12} color="#8e6266" />
                <Text numberOfLines={1} style={styles.headtext}>{personalData.adress}</Text>
              </View>



              <Text style={styles.heading}>HOBBIES</Text>

              {hobbies.length === 0 ? (
                <Text>No Hobbies details added.</Text>
              ) : (hobbies.map((hobbies, index) => (
                <View key={index}>
                  <Text style={styles.headtext}>{hobbies}</Text>
                </View>
              ))
              )}


              <Text style={styles.heading}>LANGUAGE </Text>
              {languages.length === 0 ? (
                <Text>No LANGUAGE details added.</Text>
              ) : (languages.map((Language, index) => (
                <View key={index}>
                  <Text style={styles.headtext}>{Language}</Text>
                </View>
              ))
              )}
               <Text style={styles.heading}>SKILLS </Text>
              {skills.length === 0 ? (
                <Text>No Skills details added.</Text>
              ) : (skills.map((skill, index) => (
                <View key={index} style={{  flexWrap: 'wrap', display: 'flex', flexDirection: 'row' }}>
                  <Text style={styles.headtext}>*{skill}</Text>
                </View>
              ))
              )}

            </View>
            <View style={styles.thirdcont}>
            <Text style={styles.heading}>SUMMARY</Text>
            <Text style={styles.headtext}>{about.about}</Text>

              <Text style={styles.heading}>EDUCATION</Text>
              {educationDetails.length === 0 ? (
                <Text>No education details added.</Text>
              ) : (educationDetails.map((education, index) => (
                <View key={index}>

                  <Text style={styles.head2text}>{education.institution}</Text>
                  <Text style={styles.headtext}>{education.degree}</Text>
                  <Text style={styles.head2text}>{education.startYear}-{education.endYear}</Text>
                  <Text style={styles.headtext}>{education.fieldOfStudy}</Text>
                </View>
              ))
              )}


              <Text style={styles.heading}>WORK EXPERINCE </Text>
              {experience.length === 0 ? (
                <Text>Fresher</Text>
              ) : (experience.map((experience, index) => (
                <View key={index}>
                  {/* <Text style={{ backgroundColor: 'black', height: 0.5, width: '94%' }}></Text> */}
                  <Text numberOfLines={1} style={styles.head2text}>{experience.Job_Title} ({experience.startYear}-{experience.endYear})</Text>
                  <Text style={styles.headtext}>{experience.Company_Name}/({experience.City})</Text>
                  <Text style={styles.headtext}>{experience.Description}</Text>

                </View>
              ))
              )}

            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('home')} style={styles.nextbtn}><Text style={{ fontSize: 20, color: 'white', textAlign: 'center', marginTop: 2 }}>Back</Text></TouchableOpacity>

        </View>
      )
    }




    const styles = StyleSheet.create({
      container: {
        height: '100%',
        backgroundColor: '#d7fbf7',


        // justifyContent:'center',
        gap: 50

      },

      resume: {
        height: '75%',
        width: '97%',
        backgroundColor: "#ffffff",
        borderColor: 'black',
        borderWidth: 1,
        marginLeft:5
      },
      firstcontent: {

        height: 90,
        justifyContent: 'center',
        marginTop: 0
      },
      secondcont: {
        backgroundColor: '#f4ebe9',
        height: '81%',
        width: 135,
        marginLeft: 10,
        paddingLeft: 8,
        borderRadius:2,
        // paddingTop:15,
        gap:2


      },
      heading: {
        fontWeight: 700,
        marginTop: 2
      },
      headtext: {
        fontSize: 12,
        color: '#888a8c',
        // width:'auto',
        // textAlignVertical:'top',


      },
      item: {
        flexDirection: 'row',
        alignItems: 'center',
        gap:5,
        marginTop: 6,
        // backgroundColor:'green',

      },
      thirdcont: {

        position: 'absolute',
        right: 0,
        width: 230,
        top: 89,
        marginRight:1,
        // paddingTop:15,
        paddingLeft:10,
        gap:1

      },
      head2text: {
        fontSize: 11.5,
        color: '#595959',
        // width:'auto',
        textAlignVertical: 'top',
    fontWeight:700
      },
      nextbtn: {
        backgroundColor: '#00edd9',

        height: 35,
        width: 80,
        borderRadius: 5,


        marginBottom: 30
      }
    })

