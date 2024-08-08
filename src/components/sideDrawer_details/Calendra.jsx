import React, { useEffect, useRef, useState } from 'react'
import { View, StyleSheet, Image, Dimensions, Animated } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import BackNavbar from '../BackNavbar';
import {PinchGestureHandler } from "react-native-gesture-handler";
import { Api_EndPoind, Calendra_Api_EndPoind } from '../../apis/Endpoind';


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;



const Calendra_Screen = () => {

  const [data, setdata] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [ImageUrl, setImageUrl] = useState();


  const date = new Date()
  const month = date.toLocaleString('default', { month: 'long' });

  useEffect(() => {
    if (data.length > 0) {
      const currentImage = data.find(e => e.name === month)?.img_url;
      setImageUrl(currentImage );
    }
  }, [data, month]);




  useEffect(() => {
    fetchMonths();
  }, []);
  
  useEffect(() => {
    getImagePicker();
  }, [selectedMonth]);

  const fetchMonths = async () => {
    const url = `${Api_EndPoind}/calenders`;
    const response = await fetch(url);
    const res = await response.json();
    setdata(res?.data);

  }

  const getImagePicker = () => {
    if (data?.length > 0) {
      const imageURL = data?.find(e => e?.name == selectedMonth);
      imageURL?.img_url?.includes('http') && setImageUrl(imageURL?.img_url);
    }
  };

      // for scaleableImage
      const scale = useRef(new Animated.Value(1)).current;
      const handelePinch =Animated.event([{nativeEvent:{scale:scale}}],{useNativeDriver: false})

  return (
    <View>
      <BackNavbar nametype="पंचांग (कैलेंडर) " />
    <View style={styles.parentContainer} className="bg-orange-300"
    >
      <SelectList
        dropdownStyles={styles.dropdownStyles}
        boxStyles={{ marginTop: 25, zIndex:99 ,  backgroundColor:"orange" ,textColor:'black',}}
        setSelected={(val) => setSelectedMonth(val)}
        data={Array.isArray(data) && data.length > 0 ? data.map(e => e?.name) : []}
        save="value"
        />

<PinchGestureHandler onGestureEvent={handelePinch} >
    <Animated.Image source={{ uri: ImageUrl}} style={{transform:[{scale}]}} className=" mt-auto rounded-lg w-[100%] h-[100%]  " resizeMode='contain'  />
</PinchGestureHandler>

    </View>
        </View>
  )
};

const styles = StyleSheet.create({
  parentContainer: {
    height:deviceHeight,
    padding:10,
  },
  dropdownStyles: {
    backgroundColor: "#3d3d3d",
    position: "absolute",
    width: "100%",
    zIndex: 999,
  },

});

export default Calendra_Screen;


