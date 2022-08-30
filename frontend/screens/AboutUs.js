import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import { useNavigation } from '@react-navigation/native';

function renderNavBar() {
    const navigation = useNavigation();
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
            style={{ flexDirection: 'column', justifyContent: 'center', width: 50, }}
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

function renderAboutUs() {
    return (
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Done By</Text>
            <Text>GVN Sai Uday</Text>
            <Text>Thota Sasanth</Text>
        </View>
    )
}

const AboutUs = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
            {/* Nav bar section */}
            {renderNavBar()}

            {renderAboutUs()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AboutUs;