import { View, Text, ScrollView, ImageBackground, Image, StyleSheet ,Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useRoute } from '@react-navigation/native';

import {PinchGestureHandler } from "react-native-gesture-handler";
import RenderHtmlData from '../RenderHtml';
import BackNavbar from '../BackNavbar';
import { Api_EndPoind } from '../../apis/Endpoind';

const Mandir_details = () => {
    const [details, setdetails] = useState([]);

    const Route = useRoute();
    const { BtnId ,NameType } = Route.params;

    useEffect(() => {
        const categoryDetail = async () => {
            try {
                const url = `${Api_EndPoind}/temples/${BtnId}`;
                const response = await fetch(url);
                const res = await response.json();
                setdetails(res?.data);
            } catch (error) {
                console.error(error);   
            }
        }
        categoryDetail();
    }, [BtnId ]);


    // for scaleableImage
    const scale = useRef(new Animated.Value(1)).current;
    const handelePinch =Animated.event([{nativeEvent:{scale:scale}}],{useNativeDriver: false})

  return (
      <View className="flex-1">
          <BackNavbar  nametype={NameType}/> 

      <ScrollView style={styles.container}>
    <ImageBackground source={require("../../../assets/images/bg-circle (1).png")} resizeMode="cover" className="flex-1 justify-center" style={styles.image}>
    </ImageBackground>

    <View className=" bg-orange-500 p-1 overflow-hidden rounded-2xl  w-[94%] h-28 mx-auto flex flex-row items-center justify-center mt-10 ">

        <View className="flex  items-center">
        <Text className="text-2xl font-bold text-white  ">{details.title}</Text>
        <Text className="text-xl font-semibold text-white mt-2 ">{NameType}</Text>
        </View>
    </View>

<PinchGestureHandler onGestureEvent={handelePinch}>
    <Animated.Image source={{ uri: details.image }} style={{transform:[{scale}]}} className=" rounded-lg w-[95%] h-52  mt-5 mx-auto z-10 " resizeMode='cover' />
</PinchGestureHandler>

    <View className="px-2 mt-10 min-h-[100vh]">
     
        <RenderHtmlData datahtml={details.description}/>           

    </View>
</ScrollView>
</View>

  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 159, 51, 0.4)',
    },
    image: {
        height: 600,
        width: 400,
        justifyContent: 'center',
        objectFit: "cover",
        position: 'absolute',
        top: 0,
    },
})

export default Mandir_details;


