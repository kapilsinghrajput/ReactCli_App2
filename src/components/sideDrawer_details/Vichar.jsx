import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, FlatList, Dimensions, StyleSheet, Text, Alert } from 'react-native';
import BackNavbar from '../BackNavbar';
import { Api_EndPoind } from '../../apis/Endpoind';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const Vichar = () => {
  const [images, setImages] = useState([]);
  const [pagetitle, setpagetitle] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const api = `${Api_EndPoind}/quotations`;
      const response = await fetch(api);
      const res = await response.json();
      setpagetitle(res.message)
      setImages(res.data);
    } catch (error) {
      console.error('Error fetching gallery:', error);
      Alert.alert(
        "sorry something wrong",
        error.message,
        [
            {
                text:"try again",
                onPress:this.fetchGallery()
            }
        ]
    )
    }
  };

  const imageHandler = (imageData) => {
    navigation.navigate("galleryDetails", {
      imageurl: imageData
    });
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => imageHandler(item.image)}>
      <View style={styles.container}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode='cover'
          />
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
    <BackNavbar nametype={"विचार संग्रह "}/>  
    <FlatList
      data={images}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}  
      style={{backgroundColor:"#FFC68C", minHeight:deviceHeight}} 
      />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    borderWidth: 1,
    borderRadius: 10,
    width: deviceWidth *0.45, 
    height: deviceHeight / 3 - 6, 
    overflow: 'hidden',
    backgroundColor:"#FF9F33",
    
     
  },
  
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Vichar