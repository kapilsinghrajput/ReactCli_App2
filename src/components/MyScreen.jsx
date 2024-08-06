import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';


const MyScreen = () => {
  return (
    <View className="bg-blue-500">
      <Text>MyScreen</Text>
      <Text>MyScreen</Text>
      <Icon name="rocket" size={30} color="#900" />
      

    </View>
  )
}

export default MyScreen