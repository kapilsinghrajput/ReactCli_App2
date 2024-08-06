import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../../components/HomeScreen';
import NotificationsScreen from '../../components/NotificationsScreen';



const Drawer = createDrawerNavigator();


const HomeDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Notifications" component={NotificationsScreen} />
  </Drawer.Navigator>
  )
}

export default HomeDrawer