import { View, Text, TouchableOpacity, Share } from 'react-native'
import React from 'react'

const ShareKare = () => {



  const onShareHandler = async () => {
    try {
        const result = await Share.share({
            message:
                'https://pinblooms.com/',
        });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    } catch (error) {
        Alert.alert(error.message);
    }

};


  return (
    <View className="mx-auto my-auto">
      
      <TouchableOpacity onPress={onShareHandler}><Text className="text-3xl bg-teal-400 rounded-lg p-2 px-5">Share this app</Text></TouchableOpacity>
    </View>
  )
}

export default ShareKare;