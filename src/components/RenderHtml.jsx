import { View } from 'react-native'
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';
import React from 'react';



const RenderHtmlData = ({ datahtml }) => {
  const { width } = useWindowDimensions();

  return (
    <View className="mb-16">
      <RenderHtml
        contentWidth={width}
        source={{ html: datahtml }}
        tagsStyles={{ a: {color: '#58585A', textDecorationLine: 'none', fontSize: 28, fontFamily: 'Montserrat-Bold', lineHeight: 33 }, p: { fontFamily: 'Montserrat-Regular', lineHeight: 35, margin: 10, color: '#58585A', fontSize: 23, }, img: { display: 'none' } }}
        systemFonts={defaultSystemFonts}
      />
    </View>
  )
};

export default RenderHtmlData;
