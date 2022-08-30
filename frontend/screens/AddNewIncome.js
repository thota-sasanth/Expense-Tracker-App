import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Image,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
  TextInput,
} from 'react-native';

import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import { useNavigation } from '@react-navigation/native';

import Button from '../components/Button';
import Input from '../components/Input';
import Loader from '../components/Loader';
import DatePicker from '../components/DatePicker';
import Places from '../components/Places';

import Icon from 'react-native-vector-icons/FontAwesome';
import SelectList from 'react-native-dropdown-select-list';

const K_OPTIONS = [
  {
    value: 'Income Categories',
    key: 'JUVE',
  },
  {
    value: 'Real Madrid',
    key: 'RM',
  },
  {
    value: 'Barcelona',
    key: 'BR',
  },
  {
    value: 'PSG',
    key: 'PSG',
  },
  {
    value: 'FC Bayern Munich',
    key: 'FBM',
  },
  {
    value: 'Manchester United FC',
    key: 'MUN',
  },
  {
    value: 'Manchester City FC',
    key: 'MCI',
  },
  {
    value: 'Everton FC',
    key: 'EVE',
  },
  {
    value: 'Tottenham Hotspur FC',
    key: 'TOT',
  },
  {
    value: 'Chelsea FC',
    key: 'CHE',
  },
  {
    value: 'Liverpool FC',
    key: 'LIV',
  },
  {
    value: 'Arsenal FC',
    key: 'ARS',
  },

  {
    value: 'Leicester City FC',
    key: 'LEI',
  },
]

function renderNavBar(navigation) {
    return(
      <View
        style={{
            flexDirection: 'row',
            height: 70,
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            paddingHorizontal: SIZES.padding,
            backgroundColor: COLORS.white,
        }}
      >
        <TouchableOpacity
            style={{ justifyContent: 'center', width: 50, }}
            // onPress={() => console.log('Go Back')}
            onPress={() => navigation.goBack()}
        >
          <Image
            source={icons.back_arrow}
            style={{
                width: 30,
                height: 30,
                tintColor: COLORS.primary
            }}
          />
        </TouchableOpacity>
      </View>
    )
}

const RegistrationScreen = (navigation) => {
  const [inputs, setInputs] = React.useState({
    email: '',
    fullname: '',
    phone: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const [selected, setSelected] = React.useState("");
 
  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.amount) {
      handleError('Please input amount', 'amount');
      isValid = false;
    } else if (!inputs.amount.match(/^[0-9]\d*(\.\d+)?$/)) {
      handleError('Please input a valid amount', 'amount');
      isValid = false;
    }

    if (!inputs.fullname) {
      handleError('Please input fullname', 'fullname');
      isValid = false;
    }

    if (!inputs.phone) {
      handleError('Please input phone number', 'phone');
      isValid = false;
    }

    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError('Min password length of 5', 'password');
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        AsyncStorage.setItem('userData', JSON.stringify(inputs));
        navigation.navigate('LoginScreen');
      } catch (error) {
        Alert.alert('Error', 'Something went wrong');
      }
    }, 3000);
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{ 
          paddingHorizontal: SIZES.padding, 
          paddingVertical: SIZES.padding, 
          backgroundColor: COLORS.white}}
        nestedScrollEnabled={true}
        >
        <Text style={{color: COLORS.primary, ...FONTS.h2}}>
          Add New Income
        </Text>
        <Text style={{...FONTS.h3, color: COLORS.darkgray, marginVertical:10}}>
          Enter your details of the income
        </Text>
        <View style={{marginVertical: 10}}>
          <Input
            onChangeText={text => handleOnchange(text, 'amount')}
            onFocus={() => handleError(null, 'amount')}
            // iconName="dollar"
            uri="https://cdn-icons.flaticon.com/png/512/2530/premium/2530093.png?token=exp=1656166997~hmac=bce8aa6d250c91480c7187f0632ae346"
            label="Amount"
            placeholder="Enter the transaction value"
            error={errors.amount}
          />

          <Input
            onChangeText={text => handleOnchange(text, 'expenseTitle')}
            onFocus={() => handleError(null, 'expenseTitle')}
            // iconName="account-outline"
            // iconName="pencil"
            uri="https://cdn-icons-png.flaticon.com/512/2799/2799932.png"
            label="Title"
            placeholder="Enter income name"
            error={errors.expenseTitle}
          />

          <Text style={{paddingBottom: 5, ...FONTS.h3, color: COLORS.darkgray}}>Category</Text>
          <SelectList 
            placeholder="Select category" 
            setSelected={setSelected}
            data={K_OPTIONS}
            inputStyles={{opacity: 1}}
            />

          <Text style={{paddingBottom: 0.25}}></Text>

          <DatePicker
            label="Date"
          />

          {/* <Places
            label="Location"
          /> */}

          {/* <Input
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            // iconName="lock-outline"
            iconName="dollar"
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
            password
          /> */}
          {/* <Button title="Submit " onPress={validate} style={{borderRadius: 10}} /> */}
          <TouchableOpacity onPress={validate} style={styles.button}>
            <Text style={styles.buttonText}>SUBMIT</Text>
          </TouchableOpacity>
          {/* <Text
            onPress={() => navigation.navigate('LoginScreen')}
            style={{
              color: COLORS.black,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
            }}>
            Already have account? Login
          </Text> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const AddNewIncome = () => {
    const navigation = useNavigation();
    
    return(
      <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
        {/* Nav bar section */}
        {renderNavBar(navigation)}
        {RegistrationScreen(navigation)}
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "dodgerblue",
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  }
});

export default AddNewIncome;