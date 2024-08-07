import { View, Text, TouchableOpacity, Image, Dimensions, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Api_EndPoind } from '../../apis/Endpoind';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BackNavbar from '../BackNavbar';
import { FlashList } from '@shopify/flash-list';


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const CardDetails = () => {

  const [catid, Setcatid] = useState([]);
  const [Data, setData] = useState([]);
  const [mantra, setMantra] = useState([]);
  const [mandir, setMandir] = useState([]);
  const [spinner, setSpinner] = useState(false);

  const navigation = useNavigation();
  const Route = useRoute();
  const { category_name, nameType, extraValue } = Route.params;

  const Getcatid = catid?.map((e) => e?.id);

// remember this code alaways   
const AllCatDetailsData = Data && Data.length > 0 ? Data.map(e => e) : [];

  // Fetch categories and initialize state
  useEffect(() => {  

    const ID_FetchAllCategory = async () => {
      const url = `${Api_EndPoind}/categories`;
      const response = await fetch(url);
      const res = await response.json();
      Setcatid(res.data); 

    };
    ID_FetchAllCategory();

    const fetchAllCategories = async () => {
      setSpinner(true)
      try {
        const url = `${Api_EndPoind}/categories/${Getcatid}`;
        const response = await fetch(url);
        const res = await response.json();
        setSpinner(false);
        setData(res?.data); 
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchAllCategories();
  }, []);


  
  // Fetch mantra and mandir data
  useEffect(() => {
    const fetchMantraAndMandir = async () => {
      setSpinner(true);
      try {
        const mantraUrl = `${Api_EndPoind}/mantras`;
        const mandirUrl = `${Api_EndPoind}/temples`;
        
        const [mantraResponse, mandirResponse] = await Promise.all([
          fetch(mantraUrl),
          fetch(mandirUrl)
        ]);

        const mantraRes = await mantraResponse.json();
        const mandirRes = await mandirResponse.json();

        setSpinner(false)
        setMantra(mantraRes.data);
        setMandir(mandirRes.data);
      } catch (error) {
        console.error("Error fetching mantra and mandir:", error);
      }
    };
    fetchMantraAndMandir();
  }, []);


    // Truncate string function
    const truncateString = (str, num) => {
      if (str.length > num) {
        return str.slice(0, num) + "...";
      } else {
        return str;
      }
    };

    
      // Navigate to category item
  const handelOnPressAllItem = (btnid) => {
    navigation.navigate(category_name, {
      BtnId: btnid,
      Category_name: category_name,
      NameType: nameType,
    });
  };

  // Navigate to mantra item
  const handleOnPressMantra = (btnid) => {
    navigation.navigate(category_name, {
      BtnId: btnid,
      NameType: nameType,
    });
  };

    // Navigate to mandir item
    const handleOnPressMandir = (btnid) => {
      navigation.navigate(category_name, {
        BtnId: btnid,
        Category_name: category_name,
        NameType: nameType, 
      });
    };


      // Render individual category item
  const renderAllItem = ({ item }) => (
    <TouchableOpacity onPress={() => handelOnPressAllItem(item.id)}>
    <LinearGradient className="w-full  py-2 px-4 " colors={['#e65c00', '#F9D423']}>
      <View className=" w-[100%]  flex-row items-center justify-between  gap-y-1">
        <Image source={{ uri: item.img_url }} className="h-12 w-12  rounded-full object-cover " />
        <Text className=' flex-1 ml-5 md:ml-10  text-[20px] font-semibold '>{truncateString(item.name+`${nameType}`, 25)}</Text>
        < Icon name="chevron-right" size={32}  />
      </View>
    </LinearGradient>
  </TouchableOpacity>
  );

    // Render mantra item
    const renderMantra = ({ item }) => (
      <TouchableOpacity onPress={() => handleOnPressMantra(item.id)}>
        <LinearGradient className="w-full  py-2 px-4 " colors={['#e65c00', '#F9D423']}>
          <View className=" w-[100%]  flex-row items-center justify-between  gap-y-1">
            <Image source={{ uri: item.image }} style={{ width: 50, height: 50, borderRadius: 25 }} />
            <Text className=' flex-1 ml-5 md:ml-10 text-[20px] font-semibold'>
              {truncateString(item.title, 25)}
            </Text>
            <Icon name="chevron-right" size={32} style={{ }} />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );


      // Render mandir item
  const renderMandir = ({ item }) => (
    <TouchableOpacity onPress={() => handleOnPressMandir(item.id)}>
      <LinearGradient className="w-full  py-2 px-4 "  colors={['#e65c00', '#F9D423']}>
        <View  className=" w-[100%]  flex-row items-center justify-between  gap-y-1">
          <Image source={{ uri: item.image }} style={{ width: 50, height: 50, borderRadius: 25 }} />
          <Text className=' flex-1 ml-5 md:ml-10 text-[20px] font-semibold'>
            {truncateString(item.title, 25)}
          </Text>
          <Icon name="chevron-right" size={32} style={{}} />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
  if (extraValue === "fourCards") {
    return (
      <View className="bg-orange-300 flex-1 " >
        <BackNavbar  nametype={nameType}/>
        <View className="flex-1 items-center justify-center">
          {spinner ? (<View>
            <ActivityIndicator size={70} color="gray" />
            <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 10 }}></Text>
          </View>) : (
            <View style={{ flex:1,  width: Dimensions.get("screen").width }}>
            <FlashList
             estimatedItemSize={200}
             data={AllCatDetailsData}
             renderItem={renderAllItem}
             keyExtractor={(item) => item.id.toString()}
             />
             </View>
          )}
        </View>

      </View>
    );
  }

  if (extraValue === "mantra") {
    return (
      <View className="bg-orange-300 flex-1 ">
        <BackNavbar  nametype={nameType}/>
        <View className="flex-1 items-center justify-center">
          {spinner ? (<View>
            <ActivityIndicator size={70} color="gray" />
            <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 10 }}></Text>
          </View>) : (
            <View style={{ flex:1,  width: Dimensions.get("screen").width }}>

            <FlatList
              data={mantra}
              renderItem={renderMantra}
              keyExtractor={(item) => item.id.toString()}
            />
            </View>
          )}
        </View>

      </View>
    );
  }

  
  if (extraValue === "mandir") {
    return (
      <View className="bg-orange-300 flex-1 ">
        <BackNavbar  nametype={nameType}/>
        <View className="flex-1 items-center justify-center">
          {spinner ? (<View>
            <ActivityIndicator size={70} color="gray" />
            <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 10 }}></Text>
          </View>) : (
            <View style={{ flex:1,  width: Dimensions.get("screen").width }}>
            <FlatList
             estimatedItemSize={200}
              data={mandir}
              renderItem={renderMandir}
              keyExtractor={(item) => item.id.toString()}
            />
            </View>
          )}
        </View>

      </View>
    );
  }

  return null;


}

export default CardDetails