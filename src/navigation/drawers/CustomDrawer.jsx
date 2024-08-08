import { View, Text, Share, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';







const CustomDrawer = () => {

  const Users = [
    {
      id:1,
      name:"होम ",
      category:"homeDrawer",
    },
    {
      id:2,
      name:"पाठ और  चालीसा ",
      category:"paath",
      
  
    },
    {
      id:3,
      name:"महत्वपूर्ण बाते ",
      category:"Imp_baate",
  
    },
  
    {
      id:5,
      name:"पंचांग (कैलेंडर) ",
      category:"calendra",
  
    },
    {
      id:6,
      name:"फोटो गैलरी",
      category:"gallery",
  
    },
    {
      id:7,
      name:"विचार संग्रह (Quotes)",
      category:"vichar",
  
    },
    {
      id:8,
      name:"सुझाव",
      category:"sujav",
    },
    {
      id:9,
      name:"शेयर करे",
      category:"shareKare",
  
    },
  ];

  ///////////////////
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
////////////////////

const navigation = useNavigation();

const handelOnPress = (ele) => {

  if(ele.category == "homeDrawer"){
    navigation.goBack()
  }
  if(ele.category == "shareKare"){
    onShareHandler()
  }
  else{

    
    navigation.navigate(`${ele.category}`,{
      category_name:ele.category,
      nameType: ele.name,
      Btn_id:ele.id
      
    })
  }
}

return (
  <View style={styles.container} className=' flex justify-start overflow-hidden '>
    
   <View style={{}} className=' h-48 p-2 '>
    
   <Image className=' w-44 h-44 mx-auto ' style={{  objectFit: "contain", borderRadius: 10 }} source={require("../../../assets/images/logo.png")} />
   </View>


<ImageBackground source={require("../../../assets/images/bg-circle.png")} resizeMode="cover" style={styles.image}>
</ImageBackground>

<FlatList
data={Users}
renderItem={({item})=>(
     
<TouchableOpacity   onPress={() => handelOnPress(item)}>
<LinearGradient className="w-full mt-1 p-2 " colors={['#e65c00', '#F9D423']}>
  <View className=" px-5 flex flex-row items-center justify-between gap-2">
    <Text className=' text-[#171616] text-[20px] font-medium'>{item.name}</Text>
    <Icon name="chevron-right" size={32} color={"#171616"} />
  </View>
</LinearGradient>
</TouchableOpacity>
)}/>

</View>
)
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgba(255, 159, 51, 0.4)',
  },
  image: {
    height:600,
    width:400,
    justifyContent: 'center',
    objectFit:"cover",
    position: 'absolute',
    top:0,
    
    
  },

});

export default CustomDrawer