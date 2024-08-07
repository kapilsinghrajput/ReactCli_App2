import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;


const BackNavbar = ({nametype}) => {
    
    const navigation = useNavigation();     

    return (
        <LinearGradient colors={['#e65c00', '#F9D423']}
            className='w-100 h-16 md:h-28 shadow-lg bg-blue-300 flex flex-row items-center justify-between px-3 '  >
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrow-left" size={deviceWidth*0.08} color={"white"} />
            </TouchableOpacity >
            <View className="flex flex-row items-center gap-2">
                <Text className='text-[25px] text-white '>{nametype}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("homeDrawer")}>
                <Icon name="home" size={deviceWidth*0.08} color={"white"} />
            </TouchableOpacity >
        </LinearGradient>

    )
}

export default BackNavbar;