// context/ResumeContext.js
import React, { createContext, useState } from 'react';

// 1. Create the context
export const ResumeContext = createContext();

// 2. Create the provider
export const ResumeProvider = ({ children }) => {
  const [personalData, setPersonalData] = useState({});
  const [ educationDetails, setEducationDetails] = useState([]);
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const [experience, setExperience] =useState([]);
  const[objective,setObjective]=useState([]);
  const[ about,setAbout]=useState([]);
  const [selectedTemplate,setSelectedTemplate]=useState([])


  return (
    <ResumeContext.Provider
      value={{
        personalData,
        setPersonalData,
        educationDetails, 
        setEducationDetails,
        skills ,
        setSkills,
        languages,
        setLanguages,
        hobbies,
        setHobbies,
        experience,
        setExperience,
        objective,
        setObjective,
        about,
        setAbout,
        selectedTemplate,
        setSelectedTemplate,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};
