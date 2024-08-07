import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../../components/HomeScreen';
import NotificationsScreen from '../../components/NotificationsScreen';
import Navbar from '../../components/Navbar';
import CustomDrawers from './CustomDrawer';



const Drawer = createDrawerNavigator();


const HomeDrawer = () => {
  return (
    <Drawer.Navigator
    drawerContent={props => <CustomDrawers {...props} />}
    screenOptions={{
        header: ({ navigation }) => <Navbar navigation={navigation} />
    }} >

    <Drawer.Screen name='homeScreen' component={HomeScreen} />
    
</Drawer.Navigator>
  )
}

export default HomeDrawer