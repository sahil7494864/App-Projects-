import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { ResumeContext } from '@/context/Resumecontext';
import { useNavigation } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function T5Resume() {
    const navigation = useNavigation();
    const { personalData, educationDetails, skills, languages, hobbies, experience, about } = useContext(ResumeContext);
    return (<View style={styles.container}>
        <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}>Take Screnshot and Crop</Text>
        <View style={styles.resume}>
            <View style={styles.firstcontent}>
               <Text style={{ textAlign: 'center', fontSize: 35, fontWeight: 'bold' }}>{personalData.name} {personalData.lastName}</Text><Text style={{ textAlign: 'center', fontSize: 13, color: 'black', fontWeight: 500 }}>  {personalData.profession}</Text></View>
                <View style={{ flexDirection: 'row',alignItems:'center',justifyContent:'center',paddingTop:2,paddingBottom:2 }}>
                    <Text numberOfLines={1} style={styles.head2text}>{personalData.email}</Text>
                    <Text style={styles.head2text}> | {personalData.phone}</Text>
                    <Text numberOfLines={1} style={styles.head2text}> | {personalData.adress}</Text></View> 
                    <Text style={{ backgroundColor: 'black', height: 0.8, width: '100%' }}></Text>

            <View style={styles.thirdcont}>
                <View style={styles.detailcont}>
                    <Text style={styles.headtext}>{about.about}</Text></View>
                <View style={styles.detailcont}>
                    <Text style={styles.heading}>WORK EXPERINCE </Text>
                    <Text style={{ backgroundColor: 'black', height: 0.8, width: '100%' }}></Text>
                    <View>{experience.length === 0 ? (
                        <Text>Fresher</Text>) : (experience.map((experience, index) => (
                            <View key={index}>
                                <Text numberOfLines={1} style={styles.head2text}>{experience.Job_Title}                                                         {experience.startYear}-{experience.endYear}</Text>
                                <Text style={styles.headtext}>{experience.Company_Name}/({experience.City})</Text>
                                <Text style={styles.headtext}>{experience.Description}</Text></View>)))}</View></View>
                <View style={styles.detailcont}>
                    <Text style={styles.heading}>EDUCATION</Text>
                    <Text style={{ backgroundColor: 'black', height: 0.5, width: '100%' }}></Text>
                    <View>{educationDetails.length === 0 ? (
                        <Text>No education details added.</Text>
                    ) : (educationDetails.map((education, index) => (
                        <View key={index}>
                            <Text style={styles.head2text}>{education.institution}                                                  {education.startYear}-{education.endYear}</Text>
                            <Text style={styles.headtext}>{education.degree}</Text>
                            <Text style={styles.headtext}>{education.fieldOfStudy}</Text>
                            <Text style={styles.headtext}>• CGPA - {education.CGPA}</Text></View>)))}</View></View>
                <View >
                    <Text style={styles.heading}>KEY SKILLS </Text>
                    <Text style={{ backgroundColor: 'black', height: 0.5, width: '100%' }}></Text>
                    {skills.length === 0 ? (
                        <Text>No Skills details added.</Text>
                    ) : (skills.map((skill, index) => (
                        <View key={index}>
                            <Text style={styles.head2text}>•{skill}</Text></View>)))}</View></View></View>
        <TouchableOpacity onPress={() => navigation.navigate('home')} style={styles.nextbtn}><Text style={{ fontSize: 20, color: 'white', textAlign: 'center', marginTop: 2 }}>Back</Text></TouchableOpacity></View>)
}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#d7fbf7',
        gap: 50
    },
    resume: {
        height: '75%',
        width: '97%',
        backgroundColor: "#ffffff",
        borderColor: 'black',
        borderWidth: 1,
        marginLeft: 5,
        padding: 20,
        paddingTop: 1
    },
    firstcontent: {
        height: 70,
        borderBottomColor:'black',
        borderBottomWidth: 1
    },
    heading: {
        fontWeight: 700,
        color: 'black',
        width: 80,
    },
    headtext: {
        fontSize: 10,
        color: 'black',

    },
 
    thirdcont: {
      
        paddingTop: 5,
        gap:5
    },
    detailcont: {
        
    
    },
    head2text: {
        fontSize: 11.5,
        color: 'black',
        textAlignVertical: 'top',
        fontWeight: 500
    },
    nextbtn: {
        backgroundColor: '#00edd9',
        height: 35,
        width: 80,
        borderRadius: 5,
        marginBottom: 30
    }
})

