import React,{ useState } from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const Places = ({
  label,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
   
  return (
    <View style={{marginBottom: 20}}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
            style.inputContainer,
            {
                alignItems: 'center',
            }]}>

            <Image
                source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/535/535239.png",
                }}
                style={{
                    width: 25,
                    height: 25
                }}
            />
        <ScrollView horizontal contentContainerStyle={{flex: 1, width: '100%', height: '100%'}}>
            <GooglePlacesAutocomplete
                label="Location"
                placeholder='Search'
                onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
                }}
                query={{
                key: '',
                language: 'en',
                }}
            />
        </ScrollView>
        
      </View>
      {error && (
        <Text style={{marginTop: 7, color: COLORS.red, fontSize: 12}}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    paddingLeft: 5,
    ...FONTS.h3, 
    color: COLORS.darkgray
  },
  inputContainer: {
    height: 48,
    backgroundColor: COLORS.light,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.75,
    borderRadius: 10,
  },
});

export default Places;