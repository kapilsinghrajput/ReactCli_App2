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
import Paath from '../components/sideDrawer_details/Paath';
import Baate from '../components/sideDrawer_details/Baate';
import Calendra_Screen from '../components/sideDrawer_details/Calendra';
import ImageGallery from '../components/sideDrawer_details/ImageGallery';
import Vichar from '../components/sideDrawer_details/Vichar';
import Sujav from '../components/sideDrawer_details/Sujav';
import Paath_details from '../components/sideDrawer_details/All_Paath_pages/paath_innerDet/Paath_details';
import PaathInnerDetails from '../components/sideDrawer_details/All_Paath_pages/paath_innerDet/PaathInnerDetails';
import Baate_details from '../components/sideDrawer_details/baate_details/Baate_details';
import GalleryDetails from '../components/sideDrawer_details/GalleryDetails/GalleryDetails';


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
        <Stack.Screen
          name="paath"
          component={Paath}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Imp_baate"
          component={Baate}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="calendra"
          component={Calendra_Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="gallery"
          component={ImageGallery}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="vichar"
          component={Vichar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="sujav"
          component={Sujav}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
        name="paathDetails" 
        component={Paath_details} 
        options={{ headerShown: false }} 
        />
        <Stack.Screen 
        name="paathInnerDetails" 
        component={PaathInnerDetails} 
        options={{ headerShown: false }} 
        />
        <Stack.Screen 
        name="baate_details" 
        component={Baate_details} 
        options={{ headerShown: false }} 
        />
        <Stack.Screen 
        name="galleryDetails" 
        component={GalleryDetails} 
        options={{ headerShown: false }} 
        />



     
    
  </Stack.Navigator>  
  )
}

export default StacksRoutes;