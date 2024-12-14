import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { ResumeContext } from '@/context/Resumecontext';
import { useNavigation } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function T7Resume() {
    const navigation = useNavigation();
    const { personalData, educationDetails, skills, languages, hobbies, experience, about } = useContext(ResumeContext);
    return (<View style={styles.container}>
        <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}>Take Screnshot and Crop</Text>
        <View style={styles.resume}>
            <View style={styles.firstcontent}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#073e7c' }}>{personalData.name} {personalData.lastName}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text numberOfLines={1} style={styles.head2text}>{personalData.email}</Text>
                    <Text style={styles.head2text}>|{personalData.phone}</Text>
                    <Text numberOfLines={1} style={styles.head2text}>|{personalData.adress}</Text></View></View>
            <View style={styles.thirdcont}>
                <View style={styles.detailcont}>
                    <Text style={styles.heading}>SUMMARY</Text>
                    <Text style={styles.headtext}>{about.about}</Text></View>
                <View style={styles.detailcont}>
                    <Text style={styles.heading}>WORK EXPERINCE </Text>
                    <View>{experience.length === 0 ? (
                        <Text>Fresher</Text>) : (experience.map((experience, index) => (
                            <View key={index}>
                                {/* <Text style={{ backgroundColor: 'black', height: 0.5, width: '94%' }}></Text> */}
                                <Text numberOfLines={1} style={styles.head2text}>{experience.Job_Title}                              {experience.startYear}-{experience.endYear}</Text>
                                <Text style={styles.headtext}>{experience.Company_Name}/({experience.City})</Text>
                                <Text style={styles.headtext}>{experience.Description}</Text></View>)))}</View></View>
                <View style={styles.detailcont}>
                    <Text style={styles.heading}>EDUCATION</Text>
                    <View>{educationDetails.length === 0 ? (
                        <Text>No education details added.</Text>
                    ) : (educationDetails.map((education, index) => (
                        <View key={index}>
                            <Text style={styles.head2text}>{education.institution}                       {education.startYear}-{education.endYear}</Text>
                            <Text style={styles.headtext}>{education.degree}</Text>
                            <Text style={styles.headtext}>{education.fieldOfStudy}</Text>
                            <Text style={styles.headtext}>• CGPA - {education.CGPA}</Text></View>)))}</View></View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.heading}>KEY SKILLS </Text>
                    {skills.length === 0 ? (
                        <Text>No Skills details added.</Text>
                    ) : (skills.map((skill, index) => (
                        <View key={index} style={{ flexWrap: 'wrap', display: 'flex', flexDirection: 'row' }}>
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
        paddingTop: 20
    },
    firstcontent: {
        height: 70,
        borderBottomColor: '#073e7c',
        borderBottomWidth: 1.8
    },
    heading: {
        fontWeight: 700,
        color: '#073e7c',
        width: 80,
    },
    headtext: {
        fontSize: 10,
        color: 'black',
        paddingTop: 2,
        paddingRight: 78
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        marginTop: 6,
    },
    thirdcont: {
        gap: 10,
        paddingTop: 10
    },
    detailcont: {
        flexDirection: 'row',
        borderBottomColor: '#073e7c',
        borderBottomWidth: 0.8,
        paddingBottom: 10
    },
    head2text: {
        fontSize: 11.5,
        color: 'black',
        textAlignVertical: 'top',
        fontWeight: 700
    },
    nextbtn: {
        backgroundColor: '#00edd9',
        height: 35,
        width: 80,
        borderRadius: 5,
        marginBottom: 30
    }
})

