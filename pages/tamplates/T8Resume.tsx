import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { ResumeContext } from '@/context/Resumecontext';
import { useNavigation } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function T8Resume() {
    const navigation = useNavigation();
    const { personalData, educationDetails, skills, languages, hobbies, experience, about } = useContext(ResumeContext);
    return (
        <View style={styles.container}>
        
         <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold',  fontFamily:'serif' }}>Take Screnshot and Crop</Text>

            <View style={styles.resume}>


                <View style={styles.firstcontent}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 30, fontWeight: 400, textDecorationLine: 'underline',fontFamily:'serif'}}>{personalData.name} {personalData.lastName}</Text>
                        <Text style={{ fontSize: 15, color: 'black', fontWeight: 300,fontFamily:'serif' }}>{personalData.profession}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }} >
                        <View style={styles.item}>
                            <Text style={styles.headtext}>{personalData.phone}</Text>
                            <View style={styles.icon}><Icon name="phone" size={12} color="white" /></View>
                        </View>
                        <View style={styles.item}>
                            <Text numberOfLines={1} style={styles.headtext}>{personalData.email}</Text>
                            <View style={styles.icon}><Icon name="envelope" size={12} color="white" /></View>
                        </View>
                        <View style={styles.item}>
                            <Text numberOfLines={2} style={styles.headtext}>{personalData.adress}</Text>
                            <View style={styles.icon}><Icon name="map-marker" size={12} color="white" /></View>
                        </View>
                    </View>
                </View>
                <View style={styles.border}>
                            <Text style={styles.heading}>SUMMARY</Text>{about.length === 0 ? (
                                <Text style={styles.headtext}>Hello,My name is {personalData.name}{personalData.lastName}</Text>) : (
                                <Text style={styles.headtext,styles.abouttxt}>{about.about}</Text>)}
                        </View>
                <View style={{ flex: 1, flexDirection: 'row',paddingTop:10}}>
                    <View style={styles.secondcont}>
                         
                    <Text style={styles.heading}>EDUCATION</Text>
                            {educationDetails.length === 0 ? (
                                <Text style={styles.headtext}>No education details added.</Text>
                            ) : (educationDetails.map((education, index) => (
                                <View key={index}>
                                    {/* <Text style={{ backgroundColor: 'black', height: 0.5, width: '94%' }}></Text> */}
                                    <Text style={styles.head2text}>•{education.institution}</Text>
                                    <Text style={styles.headtext}>{education.degree}</Text>
                                    <Text style={styles.head2text}>|{education.startYear}-{education.endYear}</Text>
                                    <Text style={styles.headtext}>{education.fieldOfStudy}</Text>
                                </View>
                            ))
                            )}
                       
                            <Text style={styles.heading}>SKILLS </Text>
                            {skills.length === 0 ? (
                                <Text style={styles.headtext}>No Skills details added.</Text>
                            ) : (skills.map((skill, index) => (
                                <View key={index} style={{ flexWrap: 'wrap', display: 'flex', flexDirection: 'row' }}>
                            <Text style={styles.headtext}>•{skill}</Text>
                                </View>
                            ))
                            )}
                        <Text style={styles.heading}>LANGUAGE </Text>
                        {languages.length === 0 ? (
                            <Text style={styles.headtext}>No LANGUAGE details added.</Text>
                        ) : (languages.map((Language, index) => (
                            <View key={index}>
                                <Text style={styles.headtext}>•{Language}</Text>
                            </View>
                        ))
                        )}
                    </View>
                    <View style={styles.thirdcont}>
                         
                            <Text style={styles.heading}>WORK EXPERINCE </Text>
                            {experience.length === 0 ? (
                                <Text style={styles.headtext}>Fresher</Text>
                            ) : (experience.map((experience, index) => (
                                <View key={index}>
                                    {/* <Text style={{ backgroundColor: 'black', height: 0.5, width: '94%' }}></Text> */}
                                    <Text numberOfLines={1} style={styles.head2text}>{experience.Job_Title}|{experience.startYear}-{experience.endYear}</Text>
                                    <Text style={styles.headtext}>•{experience.Company_Name}/({experience.City})</Text>
                                    <Text style={styles.headtext}>•{experience.Description}</Text>
                                </View>
                            ))
                            )}
                        
                        <Text style={styles.heading}>HOBBIES</Text>

                        {hobbies.length === 0 ? (
                            <Text style={styles.headtext}>No Hobbies details added.</Text>
                        ) : (hobbies.map((hobbies, index) => (
                            <View key={index}>
                                <Text style={styles.headtext}>•{hobbies}</Text>
                            </View>
                        ))
                        )}
                    </View>
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
        marginLeft: 5,
        flex: 1
    },
    firstcontent: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        borderBottomColor: 'black',
        borderBottomWidth: 4,
        flexDirection: 'row',
    },
    secondcont: {
        // paddingTop:15,
        gap: 2,
        flex: 1,
        // borderRightColor:'grey',
        // borderRightWidth:1,
        paddingLeft:15,
        marginBottom:25
    },
    thirdcont: {
        
        // paddingTop:15,
        gap: 1,  
        // marginRight:10,
        flex: 1,
        paddingLeft:5,
        borderLeftColor:'grey',
        borderLeftWidth:1,
    paddingRight:15
    },
    heading: {
        fontWeight: 700,
        marginTop: 2,
        textDecorationLine: 'underline',
        fontFamily:'serif'
        
    },
    headtext: {
        fontSize: 10.5,
        color: 'grey',
        fontFamily:'serif'
        // width:'auto',
        // textAlignVertical:'top',
    },
    item: {
        flexDirection: 'row',
        gap: 5,
        marginTop: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    head2text: {
        fontSize: 10.5,
        color: '#595959',
        // width:'auto',
        textAlignVertical: 'top',
        fontWeight: 700,
         fontFamily:'serif'
    },
    nextbtn: {
        backgroundColor: '#00edd9',
        height: 35,
        width: 80,
        borderRadius: 5,
        marginBottom: 30
    },
    border: {
        
         alignItems:'center',
         justifyContent:'center',
      
    },
    icon: {
        height:20,
        width:20,
        alignItems:'center',
        justifyContent:'center',  
        backgroundColor:'black',
        borderRadius:10


    },
    abouttxt:{
        paddingLeft:14.5,
        paddingRight:14.5,
        fontSize: 12,
        color: 'grey',

    }

})

