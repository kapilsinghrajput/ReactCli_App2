import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Splash from '../screens/Splash/Splash';


const Stack = createNativeStackNavigator();


const StacksRoutes = () => {
  return (
    <Stack.Navigator  
    initialRouteName='Splash'>

    <Stack.Screen name='Splash' component={Splash}/>
    <Stack.Screen name='Home' component={Home}/>
    
  </Stack.Navigator>  
  )
}

export default StacksRoutes;