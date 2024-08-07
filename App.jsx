import React from 'react'
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import StacksRoutes from './src/routes/StacksRoutes';

import 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { LogBox, View } from 'react-native';




const App = () => {

  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications

  return (
    <GestureHandlerRootView style={{flex:1}}>

    <NavigationContainer>
      <StacksRoutes/>
    </NavigationContainer>

    </GestureHandlerRootView>


  )
}

export default App;