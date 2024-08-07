import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Splash from '../screens/Splash/Splash';
import HomeDrawer from '../navigation/drawers/HomeDrawer';
import HomeScreen from '../components/HomeScreen';
import CardDetails from '../components/cardsdetails/CardDetails';
import PoojaVidhi from '../components/cardsdetails/PoojaVidhi';
import Vrat_katha from '../components/cardsdetails/Vrat_katha';
import Aarti from '../components/cardsdetails/Aarti';
import Pujan_samagree from '../components/cardsdetails/Pujan_samagree';
import Mantra_details from '../components/cardsdetails/Mantra_details';
import Mandir_details from '../components/cardsdetails/Mandir_details';


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

       <Stack.Screen
          name='homeScreen'
          component={HomeScreen}
          options={{ headerShown: false }}
        />

          <Stack.Screen
          name="cardDetail"
          component={CardDetails}
          options={{ headerShown: false }}
        />
           <Stack.Screen
          name="pooja_vidhi"
          component={PoojaVidhi}
          options={{headerShown: false }}
        />

        <Stack.Screen
          name="vrat_katha"
          component={Vrat_katha}
          options={{ 
            headerShown: false 
          }} 
        />
        <Stack.Screen
          name="aarti"
          component={Aarti}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="pujan_samagree"
          component={Pujan_samagree}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="mantra"
          component={Mantra_details}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="mandir"
          component={Mandir_details}
          options={{ headerShown: false }}
        />


     
    
  </Stack.Navigator>  
  )
}

export default StacksRoutes;