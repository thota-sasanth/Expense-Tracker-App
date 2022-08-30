import React from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
const Input = ({
  label,
  // iconName,
  uri,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={{marginBottom: 20}}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? COLORS.red
              : isFocused
              ? COLORS.darkBlue
              : COLORS.light,
            alignItems: 'center',
          },
        ]}>
        {/* <Icon
          name={iconName}
          style={{color: COLORS.darkBlue, fontSize: 22, marginRight: 10}}
        /> */}
        <Image
            source={{
                // uri: "https://cdn-icons.flaticon.com/png/512/2530/premium/2530493.png?token=exp=1656164864~hmac=5608813f4d637367d79a4409118e813c",
                uri: uri,
            }}
            style={{
                width: 25,
                height: 25,
                marginRight: 10
            }}
            />
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{color: COLORS.darkBlue, flex: 1}}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye' : 'eye-slash'}
            style={{color: COLORS.darkBlue, fontSize: 22}}
          />
        )}
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
    paddingHorizontal: 10,
    borderWidth: 0.75,
    borderRadius: 10,
  },
});

export default Input;