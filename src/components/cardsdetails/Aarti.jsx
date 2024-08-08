import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import RenderHtmlData from '../RenderHtml';
import { Api_EndPoind } from '../../apis/Endpoind';
import BackNavbar from '../BackNavbar';

const Aarti = () => {
    const [details, setdetails] = useState([]);
    const [newaarti, setnewaarti] = useState();
    const Route = useRoute();
    const { BtnId, NameType } = Route.params;

    useEffect(() => {
        const categoryDetail = async () => {
            const url = `${Api_EndPoind}/categories/${BtnId}`;
            const response = await fetch(url);
            const res = await response.json();
            setnewaarti(res.data.aarti[0].p_aarti);
            setdetails(res.data);
        }
        categoryDetail();
    }, [BtnId]);

    return (
        <View className="flex-1">

            <BackNavbar nametype={NameType} />

            <ScrollView style={styles.container}>
                <ImageBackground source={require("../../../assets/images/bg-circle.png")} resizeMode="cover" className="flex-1 justify-center" style={styles.image}>
                </ImageBackground>

                <View className=" bg-orange-500 p-1  rounded-2xl  w-[94%] h-50 mx-auto flex flex-row items-center  mt-10 ">
                    <Image source={{ uri: details.img_url }} className="flex-2 w-32 h-32  " resizeMode='cover' />
                    <View className="flex-1">
                        <Text className="text-3xl font-semibold text-white  ml-4">{details.name}</Text>
                        <Text className="text-xl font-semibold text-gray-100 mt-2 mx-auto  ">{NameType}</Text>
                    </View>
                </View>

                <View className="px-4 mt-10 min-h-[100vh]">
                    <RenderHtmlData datahtml={newaarti} />
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
export default Aarti;


