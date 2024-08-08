import React from 'react';
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, ImageBackground, StyleSheet, ToastAndroid, Alert, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import BackNavbar from '../BackNavbar';
import { Api_EndPoind } from '../../apis/Endpoind';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Sujav = () => {

  const showToastWithGravityAndOffset = (message) => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  const onSubmitHandle = async (values) => {
    const url = `${Api_EndPoind}/save-feedback`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_name: values.name,
          email_id: values.email,
          phone: values.number,
          feedback: values.suggestion
        })
      });
      const res = await response.json();
      showToastWithGravityAndOffset(res.message);
      Alert.alert(res.message)
    } catch (error) {
      console.error('Error submitting feedback:', error);
      showToastWithGravityAndOffset('Failed to submit feedback');
    }
  }

  // Define Yup schema for validation
  const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    number: yup.string().required('Number is required').matches(/^[0-9]{10}$/, 'Must be exactly 10 digits'),
    suggestion: yup.string().required('Suggestion is required'),
  });

  return (
    <ScrollView style={{ width: deviceWidth, height: deviceHeight }} className="bg-orange-300">
      <ImageBackground source={require("../../../assets/images/bg-circle.png")} resizeMode="contain" style={styles.image}>
      </ImageBackground>
      <BackNavbar nametype={"सुझाव"} />
      <View style={{ height: '25%', alignItems: 'center', justifyContent: 'center', borderBottomWidth: 2, borderColor: 'gray' }}>
        <Image resizeMode='contain' style={{ height: deviceHeight*0.20 , width: deviceWidth*0.20 }} source={require("../../../assets/images/logo.png")} />
        <Text style={{ fontSize: 23 , marginTop:-20 , color:"#232322",  fontWeight: 'semibold',}}>आपका सुझाव आमंत्रित है</Text>
      </View>

      <View style={{ width: '90%',  padding: 10, height: deviceHeight, marginHorizontal: '5%' }} className=" mt-5 ">
        <Formik
          initialValues={{
            name: '',
            email: '',
            number: '',
            suggestion: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            onSubmitHandle(values);
            actions.resetForm();
          }}
        >
          {(formikProps) => (
            <View>
              <TextInput
                style={{ backgroundColor: 'white', color:"black", fontSize: 20, borderRadius: 10, padding: 10, marginVertical: 10 }}
                placeholder='नाम '
                 placeholderTextColor='#5c5c5c'
                onChangeText={formikProps.handleChange('name')}
                onBlur={formikProps.handleBlur('name')}
                value={formikProps.values.name}
              />
              {formikProps.touched.name && formikProps.errors.name &&
                <Text style={{ color: 'red' }}>{formikProps.errors.name}</Text>
              }

              <TextInput
                style={{ backgroundColor: 'white', color:"black", fontSize: 20, borderRadius: 10, padding: 10, marginVertical: 10 }}
                placeholder='ई-मेल'
                 placeholderTextColor='#5c5c5c'
                onChangeText={formikProps.handleChange('email')}
                onBlur={formikProps.handleBlur('email')}
                value={formikProps.values.email}
                keyboardType="email-address"
              />
              {formikProps.touched.email && formikProps.errors.email &&
                <Text style={{ color: 'red' }}>{formikProps.errors.email}</Text>
              }

              <TextInput
                style={{ backgroundColor: 'white', color:"black", fontSize: 20, borderRadius: 10, padding: 10, marginVertical: 10 }}
                placeholder='मोबाइल नंबर'
                 placeholderTextColor='#5c5c5c'
                onChangeText={formikProps.handleChange('number')}
                onBlur={formikProps.handleBlur('number')}
                value={formikProps.values.number}
                keyboardType="phone-pad"
              />
              {formikProps.touched.number && formikProps.errors.number &&
                <Text style={{ color: 'red' }}>{formikProps.errors.number}</Text>
              }

              <TextInput
                multiline={true}
                style={{ backgroundColor: 'white', color:"black", fontSize: 20, borderRadius: 10, padding: 10, marginVertical: 10, height: 100 }}
                placeholder='सुझाव '
                 placeholderTextColor='#5c5c5c'
                onChangeText={formikProps.handleChange('suggestion')}
                onBlur={formikProps.handleBlur('suggestion')}
                value={formikProps.values.suggestion}
              />
              {formikProps.touched.suggestion && formikProps.errors.suggestion &&
                <Text style={{ color: 'red' }}>{formikProps.errors.suggestion}</Text>
              }

              <TouchableOpacity onPress={formikProps.handleSubmit} style={{ backgroundColor: "#FF5100", borderRadius: 10, padding: 10, marginVertical: 10, alignItems: 'center' }} className="md:mt-5">
                <Text style={{ fontSize: 20, color: 'white' }}>Submit</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
      
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  image: {
    height: deviceHeight,
    width: deviceWidth,
    justifyContent: 'center',
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
  }
});

export default Sujav;
