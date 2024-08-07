import React, { useEffect, useState } from 'react';
import { Dimensions, Image, View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { Api_EndPoind } from '../../apis/Endpoind';


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const SliderScreen = () => {

  const [myimg, setmyimg] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [firstimage] = useState(require('../../../assets/images/women_vrat.png'));

  useEffect(() => {
    fetchApi()
  }, []);

  const fetchApi = async () => {

    const url = `${Api_EndPoind}/banners`;
    const response = await fetch(url);
    const res = await response.json();
    setmyimg(res.data);
    setIsLoading(false)
  }

  const SLIDER_DATA = myimg?.map(e => e?.img_url);

  return (
    <View  style={{height: deviceHeight*0.23,  backgroundColor:'rgba(255, 159, 51, 0.4)',}} >

      { isLoading?(   <Image
          source={firstimage}
          resizeMode='contain'
          style={{ height: deviceHeight * 0.23, width: deviceWidth , marginVertical:"auto"}}
        />) : (
        <SliderBox
        images={SLIDER_DATA}
        imageLoadingColor={'rgba(255, 159, 51, 0)'}
        dotColor="orange"
        autoplay={true}
        autoplayInterval={5000}
        circleLoop={true}
        resizeMode="cover" 
        resizeMethod={'resize'}
        paginationBoxVerticalPadding={10}
        ImageComponentStyle={{ height: deviceHeight*0.23, width:deviceWidth, }}
        // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
      />
      )
        

        }

    </View>
  )
};
export default SliderScreen;

