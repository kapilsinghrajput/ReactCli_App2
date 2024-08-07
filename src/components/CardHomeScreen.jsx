import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';



let deviceHeight = Dimensions.get('window').height
let deviceWidth = Dimensions.get('window').width;

const Users = [
  {
    id: 1,
    name: "  पूजा विधि ",
    img: require("../../assets/images/kalash.png"),
    category: "pooja_vidhi",
    extra:"fourCards"
  },
  {
    id: 2,
    name: "व्रत कथा",
    img: require("../../assets/images/women_vrat.png"), 
    category: "vrat_katha",
    extra:"fourCards"

  },
  {
    id: 3,
    name: "आरती",
    img: require("../../assets/images/women_aarti.png"),
    category: "aarti",
    extra:"fourCards"

  },
  {
    id: 4,
    name: "पूजन सामग्री",
    img: require("../../assets/images/pujan_thali.png"),
    category: "pujan_samagree",
    extra:"fourCards"
    
  },
  {
    id: 5,
    name: " मंत्र",
    img: require("../../assets/images/mantra.png"),
    category: "mantra",
    extra:"mantra"
  },
  {
    id: 6,
    name: "प्रसिद्ध मंदिर",
    img: require("../../assets/images/mandir.png"),
    category: "mandir",
    extra:"mandir",
  }
];

const CardHomeScreen = () => {


  const navigation = useNavigation();

  const handelOnPress = (ele) => {
    navigation.navigate("cardDetail",{
      category_name:ele.category,
      nameType: ele.name,
      extraValue:ele.extra,

    })
  }

  return (
    <View className="flex flex-row flex-wrap justify-between   px-3 pb-8" style={styles.container}>
       <ImageBackground source={require("../../assets/images/bg-circle (1).png")} resizeMode="cover" className="flex-1 justify-center" style={styles.image}>
       </ImageBackground>
      {Users.map((e, ind) => (
        <TouchableOpacity activeOpacity={1} onPress={() => handelOnPress(e)} key={ind} className="w-[48%] h-36  md:h-60   mt-6 rounded-t-3xl ">
<LinearGradient colors={['#F9D423','#e65c00' ]} className="w-full h-full flex flex-col items-center border-2 rounded-md">
          <Image source={e.img} resizeMode='contain' className="  w-full h-[100] md:h-44 justify-center drop-shadow-2xl rounded-t-3xl " />
          <View className="bg-yellow-950 w-full h-10  ">
          <Text className="text-xl  text-white mx-auto mt-2 md:my-auto md:text-2xl ">{e.name}</Text>
          </View>
</LinearGradient>

        </TouchableOpacity>
      ))}
    </View>
  )
}



const styles = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor:'rgba(255, 159, 51, 0.4)',
      height:deviceHeight*0.72
   
  },
  image: {
    height:deviceHeight,
    width:deviceWidth,
    justifyContent: 'center',
    objectFit:"contain",
    position: 'absolute',
    top:0,
    elevation: -3
  },
  })

export default CardHomeScreen;