import React,{ useState } from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from "date-fns";


const DatePicker = ({
  label,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  let formattedDate = format(date, "MMMM do, yyyy");

  const dtOnChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  
  return (
    <View style={{marginBottom: 20}}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
            style.inputContainer,
            {
                alignItems: 'center',
            }]}>

        <TouchableOpacity
            style={{ justifyContent: 'center', alignItems: 'flex-start', width: 35 }}
            onPress={showDatepicker}
        >
            {/* <Icon
            name={iconName}
            style={{color: COLORS.darkBlue, fontSize: 22, marginRight: 10}}
            /> */}
            <Image
                source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/747/747310.png",
                }}
                style={{
                    width: 25,
                    height: 25
                }}
            />
        </TouchableOpacity>
        <Text>{formattedDate.toLocaleString()}</Text>

        {/* <TextInput
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          {...props}
        /> */}

        {show && (<DateTimePicker
            value={new Date()}
            onChange={dtOnChange}
            mode={mode}
        />)}
        
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

export default DatePicker;