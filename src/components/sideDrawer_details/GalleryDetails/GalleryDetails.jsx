import React, { useRef } from 'react';
import { View, TouchableOpacity, Animated, Dimensions, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';




const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const GalleryDetails = () => {
  const ref = useRef();
  const Route = useRoute();
  const { imageurl } = Route.params;
  const navigate = useNavigation();

  const imageUrl = { uri: imageurl };

  const handleDownload = async () => {
    let date = moment().format('YYYYMMDDhhmmss');
    let fileUri = FileSystem.documentDirectory + `${date}.jpg`;

    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      
      if (status === 'granted') {
        const downloadResumable = FileSystem.createDownloadResumable(
          imageUrl.uri,
          fileUri
        );

        const { uri } = await downloadResumable.downloadAsync();
        saveFile(uri);
      } else {
        Alert.alert('Permission denied', 'Please allow permission to save the image.');
      }
    } catch (err) {
      console.error('Download error:', err);
      Alert.alert('Download failed', 'Failed to download the image.');
    }
  };

  const saveFile = async (fileUri) => {
    try {
      const asset = await MediaLibrary.createAssetAsync(fileUri);
      const album = await MediaLibrary.getAlbumAsync('Download');

      if (album === null) {
        await MediaLibrary.createAlbumAsync('Download', asset, false);
      } else {
        await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
      }

      Alert.alert('Image saved', 'Image saved successfully to Download album.');
    } catch (err) {
      console.error('Save error:', err);
      Alert.alert('Save failed', 'Failed to save the image.');
    }
  };

  // for scaleableImage
  const scale = useRef(new Animated.Value(1)).current;
  const handelePinch = Animated.event([{ nativeEvent: { scale: scale } }], {
    useNativeDriver: false,
  });

  return (
    <View style={{ flex: 1, }} className=" bg-zinc-900  ">
      <TouchableOpacity
        onPress={() => navigate.goBack()}
        style={{ position: 'absolute', top: 15, right: 15, zIndex: 999 }}
      >
        <Icon name="close-circle" size={42} color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleDownload}
        style={{ position: 'absolute', top: 15, left: 15, zIndex: 999 }}
      >
        <Icon name="download" size={42} color="white" />
      </TouchableOpacity>

  
      <View>

        <Animated.Image
          source={{ uri: imageurl }}
          style={{
            transform: [{ scale }],
            width: deviceWidth,
            height: deviceHeight,
            borderRadius: 10,
            marginVertical: 10,
            alignSelf: 'center',
          }}
          resizeMode="contain"
          />
          </View>
{/* </PinchGestureHandler> */}

   
    </View>
  );
};
  
export default GalleryDetails;
