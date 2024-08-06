import React from 'react'
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import StacksRoutes from './src/routes/StacksRoutes';

import 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler';





const App = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>

    <NavigationContainer>
      <StacksRoutes/>
    </NavigationContainer>

    </GestureHandlerRootView>


  )
}

export default App;