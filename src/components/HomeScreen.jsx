import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import SliderScreen from './slider/SliderScreen'
import CardHomeScreen from './CardHomeScreen';



let deviceHeight = Dimensions.get('window').height
let deviceWidth = Dimensions.get('window').width;

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} className="bg-orange-200">
      <SliderScreen />
      <CardHomeScreen/>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container:{
    width:deviceWidth,
    height:deviceHeight,
  },


})

export default HomeScreen