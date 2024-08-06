import { View, Text, StatusBar, ImageBackground, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import AppWrapper from '../../components/AppWrapper'


let deviceHeight = Dimensions.get('window').height
let deviceWidth = Dimensions.get('window').width;


const Splash = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate("homeDrawer")
      navigation.reset({
        index: 0,
        routes: [{ name: 'homeDrawer' }]
   })
    }, 1500);
  }, []);


  return (
 <AppWrapper>
   <View className='w-full h-full flex-1 justify-center items-center'>
      <ImageBackground
        source={require("../../../assets/images/god-flash-screen-back.jpg") }
        resizeMode="cover"
        style={styles.image}>
      </ImageBackground>
      <ImageBackground
        source={require("../../../assets/images/god-flash-screen-front.png") }
        resizeMode="cover"
        style={styles.image2}>
      </ImageBackground>
    </View>
 </AppWrapper>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 159, 51, 0.4)',
  },
  image: {
    height: deviceHeight+5,
    width: deviceWidth,
    justifyContent: 'center',
    alignItems: "center",
  },
  image2: {
    height: deviceHeight,
    width: deviceWidth,
    justifyContent: 'center',
    alignItems: "center",
    position:"absolute",

  },
});


export default Splash