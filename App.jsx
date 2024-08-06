import React from 'react'
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import StacksRoutes from './src/routes/StacksRoutes';

import 'react-native-gesture-handler';




const App = () => {
  return (
    <NavigationContainer>
      <StacksRoutes/>
    </NavigationContainer>

  )
}

export default App;