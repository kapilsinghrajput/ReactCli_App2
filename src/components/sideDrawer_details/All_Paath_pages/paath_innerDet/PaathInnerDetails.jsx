import { View, Text, ScrollView, ImageBackground, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import BackNavbar from '../../../BackNavbar';
import RenderHtmlData from '../../../RenderHtml';
import { Api_EndPoind } from '../../../../apis/Endpoind';

const PaathInnerDetails = () => {

  const [details, setdetails] = useState([]);

  const Route = useRoute();
  const { Btn_id  } = Route.params;

  useEffect(() => {
      const categoryDetail = async () => {
          try {
              const url = `${Api_EndPoind}/path-details/${Btn_id}`;
              const response = await fetch(url);
              const res = await response.json();
              setdetails(res?.data[0]);
          } catch (error) {
              console.error(error);   
          }

      }
      categoryDetail();

  }, [Btn_id ]); 

  return (

    <View className="flex-1">
      <BackNavbar nametype={details.title}/>  
    <ScrollView style={styles.container}>

    <ImageBackground source={require("../../../../../assets/images/bg-circle (1).png")} resizeMode="cover" className="flex-1 justify-center" style={styles.image}>
    </ImageBackground>

    <View className=" bg-orange-500  overflow-hidden rounded-xl  w-[95%] h-16 mx-auto flex flex-row items-center justify-center mt-5 ">

        <View className="flex  items-center">
        {/* <Text className="text-2xl font-bold text-white  ">{details.title}</Text> */}
        <Text className="text-2xl font-semibold text-white  ">{details.path}</Text>
        </View>
    </View>

    <Image source={{ uri: details.image }} className=" rounded-lg w-[95%] h-52  mt-4 mx-auto " resizeMode='cover' />

    <View className="px-2 mt-10 ">
        <RenderHtmlData datahtml={details.detail}/> 
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
});

export default PaathInnerDetails;