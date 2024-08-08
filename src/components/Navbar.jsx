import { View, Text, Dimensions, TouchableOpacity, Image, Share } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;


const Navbar = ({ navigation }) => {

  // share funstion

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

/////////////

  return (
    <LinearGradient colors={['#e65c00', '#F9D423']} 
      className='w-100 h-16 md:h-28 shadow-lg flex flex-row  items-center justify-between p-2'>

          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name="menu" size={deviceWidth*0.06} color={"white"} />
          </TouchableOpacity > 

      <View className="flex flex-row items-center md:items-end  justify-center ">
        <Text style={{fontSize:deviceWidth*0.05}} className='  md:text-4xl text-white p-2 md:py-5 '>पूजा</Text>
        <Image style={{ width: deviceWidth*0.10 , height: deviceHeight*0.10, objectFit: "contain", borderRadius: 10 }} source={require("../../assets/images/logo.png")}  />
        <Text style={{fontSize:deviceWidth*0.05}} className=' md:text-4xl text-white  p-2 md:py-5 '>विधी</Text>
      </View>

      <View className="flex flex-row gap-0">
        {/* <MaterialCommunityIcons name="magnify" color={"white"} size={22} /> */}
        <Icon onPress={onShareHandler} name="share-variant" color={"white"} size={deviceWidth*0.06} />
      </View>
    </LinearGradient>

  )
}

export default Navbar