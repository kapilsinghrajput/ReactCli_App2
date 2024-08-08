import { View, Text,  Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BackNavbar from '../BackNavbar';
import { Api_EndPoind } from '../../apis/Endpoind';
import LinearGradient from 'react-native-linear-gradient';

const Baate = () => {


    const [ details , setdetails] = useState([]);

  const navigation = useNavigation(); 

  const Route = useRoute();
  const { nameType } = Route.params;

  const paathItem = details?.map((e) => e);
 

  useEffect(()=>{
    const categoryDetail = async()=>{
        const url = `${Api_EndPoind}/pages`;
        const response =  await fetch(url);
        const res = await response.json();
        setdetails(res.data)

    }
    categoryDetail();

},[]);








const handelOnPressInnerList = (item)=>{
console.log(item.id);
    navigation.navigate(`baate_details`,{
      Btn_id :item.id,
      nameType:nameType
    })
 
  }


const renderPaathItem = ({ item })=>{
    return(
        <TouchableOpacity onPress={() => handelOnPressInnerList(item)} className="flex-1">
        <LinearGradient className="w-full mt-1 p-2 " colors={['#e65c00', '#F9D423']}> 
          <View className=" w-[100%]  flex-row items-center justify-between  gap-y-1">
            <Image source={{ uri: item.image }} className="h-12 w-12  rounded-full object-cover " />
            <Text className=' flex-1 ml-5 md:ml-10  text-[20px] font-semibold '>{item.title}</Text>
            <Icon name="chevron-right" size={32} style={{ position: "absolute", right: 60, top: 5 }} />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    )

}

return (
    <View className="bg-orange-300 flex-1 ">
<BackNavbar nametype={nameType}/>  
      <FlatList
        data={paathItem}
        renderItem={renderPaathItem}
      />
    </View>
  )
}

export default Baate





