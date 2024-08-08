import { View, Text, ScrollView, ImageBackground, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import BackNavbar from '../../BackNavbar';
import RenderHtmlData from '../../RenderHtml';
import { Api_EndPoind } from '../../../apis/Endpoind';


const Baate_details = () => {

    const [details, setdetails] = useState([]);
    const Route = useRoute();
    const { Btn_id ,nameType } = Route.params;

    useEffect(() => {
        const categoryDetail = async () => {
            try {
                const url = `${Api_EndPoind}/pages/${Btn_id}`;
                const response = await fetch(url);
                const res = await response.json();
                setdetails(res?.data);

                
            } catch (error) {
                console.error(error);   

            }

        }
        categoryDetail();


    }, [Btn_id ]);

  return (

    <View className='flex-1'>
      <BackNavbar nametype={nameType}/>

    <ScrollView style={styles.container}>

    <ImageBackground source={require("../../../../assets/images/bg-circle (1).png")} resizeMode="cover" className="flex-1 justify-center" style={styles.image}>
    </ImageBackground>

    <View className=" bg-orange-500 p-1 overflow-hidden rounded-2xl  w-[94%] h-20 mx-auto flex flex-row items-center justify-center mt-10 ">

        <View className="flex  items-center">
        <Text className="text-2xl font-bold text-white  ">{details.title}</Text>
        </View>
    </View>

    <Image source={{ uri: details.image }} className=" rounded-lg w-[95%] h-52  mt-5 mx-auto " resizeMode='cover' />


    <View className="px-2 mt-10 ">
        {/* <Text className="text-xl  p-4">
        {details.description}
        </Text> */}
        <RenderHtmlData datahtml={details.description}/> 
    </View>


</ScrollView>
</View>

  )
}


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
export default Baate_details