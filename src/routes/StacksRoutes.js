import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Splash from '../screens/Splash/Splash';
import HomeDrawer from '../navigation/drawers/HomeDrawer';


const Stack = createNativeStackNavigator();


const StacksRoutes = () => {
  return (
    <Stack.Navigator  
    initialRouteName='Splash'>

    <Stack.Screen name='Splash'
     component={Splash}
     options={{ headerShown: false }}
     />
    <Stack.Screen
          name="homeDrawer"
          component={HomeDrawer}
          options={{ headerShown: false }}
     />


     
    
  </Stack.Navigator>  
  )
}

export default StacksRoutes;