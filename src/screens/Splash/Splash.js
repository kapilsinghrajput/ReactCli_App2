import { View, Text, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import AppWrapper from '../../components/AppWrapper'

const Splash = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate("homeDrawer")
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }]
   })
    }, 1500);
  }, []);


  return (
 <AppWrapper>
    <Text className="text-yellow-200 text-2xl">Splash Screen ;</Text>
  {/* <StatusBar hidden/> */}
 </AppWrapper>
  )
}

export default Splash