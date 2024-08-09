import { View, TouchableOpacity, Alert, PermissionsAndroid, Platform, Animated, Dimensions } from 'react-native';
import React, { useRef, useState } from 'react';
import RNFetchBlob from 'rn-fetch-blob';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import ViewShot from 'react-native-view-shot';
import Share from 'react-native-share';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const GalleryDetails = () => {
  const ref = useRef();
  const route = useRoute();
  const { imageurl } = route.params;
  const navigate = useNavigation();
  
  const [downloadedImagePath, setDownloadedImagePath] = useState(null);

  const handleDownload = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message: 'App needs access to your storage to download photos',
          }
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert('Error', 'Storage permission not granted');
          return;
        }
      }

      const { config, fs } = RNFetchBlob;
      const PictureDir = fs.dirs.PictureDir;
      const filename = `downloadedImage_${Date.now()}.jpg`;
      const imagePath = `${PictureDir}/${filename}`;

      const options = {
        fileCache: true,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          path: imagePath,
          description: 'Image',
        },
      };

      config(options)
        .fetch('GET', imageurl)
        .then((res) => {
          setDownloadedImagePath(imagePath); // Save the downloaded image path
          Alert.alert('Success', 'Image Downloaded Successfully.');
        })
        .catch((error) => {
          Alert.alert('Error', 'Image Download Failed.');
          console.error(error);
        });
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Something went wrong');
    }
  };

  const handleShare = async () => {
    try {
      if (!downloadedImagePath) {
        Alert.alert('Error', 'Please download the image first.');
        return;
      }

      const shareOptions = {
        title: 'Share Image',
        url: `file://${downloadedImagePath}`,
        message: '',
      };

      await Share.open(shareOptions);
    } catch (error) {
      console.error('Error sharing the image:', error);
      Alert.alert('Error', '');
    }
  };

  return (
    <View style={{ flex: 1 }} className="bg-zinc-900">
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

      <TouchableOpacity
        onPress={handleShare}
        style={{ position: 'absolute', bottom: 15, left: 15, zIndex: 999 }}
      >
        <Icon name="share" size={42} color="white" />
      </TouchableOpacity>

      <ViewShot ref={ref}>
        <View>
          <Animated.Image
            source={{ uri: imageurl }}
            style={{
              width: deviceWidth,
              height: deviceHeight,
              borderRadius: 10,
              marginVertical: 10,
              alignSelf: 'center',
            }}
            resizeMode="contain"
          />
        </View>
      </ViewShot>
    </View>
  );
};

export default GalleryDetails;
