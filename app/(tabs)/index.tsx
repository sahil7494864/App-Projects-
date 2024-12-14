import { View, Text } from 'react-native'
import React from 'react'
import Home from '@/components/resumeprj/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Templ1 from '@/pages/teblate1/Templ1';
import Educati_inf from '@/pages/teblate1/Educati_inf';
import Skills from '@/pages/teblate1/Skills';
import Language from '@/pages/teblate1/Language';
import Hobbies from '@/pages/teblate1/Hobbies';
import Experence from '@/pages/teblate1/Experence';
import Objective from '@/pages/teblate1/Objective';
import T1Resume from '@/pages/tamplates/T1Resume';
import { ResumeProvider } from '@/context/Resumecontext';
import About from '@/pages/teblate1/About';
import T2resume from '@/pages/tamplates/T2resume';
import T3Resume from '@/pages/tamplates/T3Resume';
import T4Resume from '@/pages/tamplates/T4Resume';
import T5Resume from '@/pages/tamplates/T5Resume';
import T6Resume from '@/pages/tamplates/T6Resume';
import T8Resume from '@/pages/tamplates/T8Resume';
import T7Resume from '@/pages/tamplates/T7Resume';
const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <ResumeProvider> 
      
  <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#00edd9'}}}>
  
 <Stack.Screen name='home' component={Home} options={{headerShown:false,}} />
  <Stack.Screen name='templ1' component={Templ1} options={{title:'Presonal Details'}}/>
  <Stack.Screen name='Educati_inf' component={Educati_inf} options={{title:'Education Details'}}/>
  <Stack.Screen name='skills' component={Skills} options={{title:'Mention Skils'}}/>
  <Stack.Screen name='Language' component={Language} options={{title:'Select Languges'}}/>
  <Stack.Screen name='Hobbies' component={Hobbies} options={{title:'Select Hobbies'}}/>
  <Stack.Screen name='Experence' component={Experence} options={{title:'Enter Experence'}}/>
  <Stack.Screen name='Objective' component={Objective} options={{title:'Enter Objective'}}/>
  <Stack.Screen name='about' component={About} options={{title:'Enter About You'}}/>
  {/* tamplates  */}
  <Stack.Screen name='T1Resume' component={T1Resume} options={{title:'Resume'}}/> 
  <Stack.Screen name='T2Resume' component={T2resume} options={{title:'Resume'}}/>
  <Stack.Screen name='T3Resume' component={T3Resume} options={{title:'Resume'}}/>
  <Stack.Screen name='T4Resume' component={T4Resume} options={{title:'Resume'}}/>
  <Stack.Screen name='T5Resume' component={T5Resume} options={{title:'Resume'}}/>
  <Stack.Screen name='T6Resume' component={T6Resume} options={{title:'Resume'}}/>
  <Stack.Screen name='T7Resume' component={T7Resume} options={{title:'Resume'}}/>
  <Stack.Screen name='T8Resume' component={T8Resume} options={{title:'Resume'}}/>







  </Stack.Navigator>
  </ResumeProvider>

  )
}

export default index