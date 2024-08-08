import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, FlatList, Dimensions, StyleSheet, Text } from 'react-native';
import BackNavbar from '../BackNavbar';
import { Api_EndPoind } from '../../apis/Endpoind';


const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [pagetitle, setpagetitle] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const api = `${Api_EndPoind}/gallery`;
      const response = await fetch(api);
      const res = await response.json();
      setpagetitle(res.message)
      setImages(res.data);
    } catch (error) {
      console.error('Error fetching gallery:', error);
    }
  };

  const imageHandler = (imageData) => {
    navigation.navigate("galleryDetails", {
      imageurl: imageData
    });
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => imageHandler(item.image)}>
      <View style={styles.container} className="md:m-5">
        <View style={styles.Inner_container}>
          <Image
            source={{ uri: item.image }}
            style={styles.image}
            resizeMode='cover'
          />
        </View>
        <Text className=" text-white text-base mt-2  md:text-2xl font-semibold "  >{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 ">
      <BackNavbar nametype={"फोटो  संग्रह "} />
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} 
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom:10,
    borderWidth: 1,
    borderRadius: 10,
    margin: 7,
    width: deviceWidth * 0.44,
    height: deviceHeight * 0.39,
    overflow: 'hidden',
    backgroundColor: "#FF9F33",
  },
  Inner_container: {
    flex: 1,
    alignItems: 'center',
    borderTopRightRadius:10,
    width: "100%",
    maxHeight:"90%",
    minHeight:"90%",
    overflow: 'hidden',
  },
  flatListContainer: {
    backgroundColor: "#FFC68C",
    minHeight:deviceHeight,
    padding: 8, 
  },

  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageGallery;
