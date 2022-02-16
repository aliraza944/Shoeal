/* eslint-disable prettier/prettier */
import React from 'react';
import {ImageBackground, Image, StatusBar, Text, View} from 'react-native';
import {styles} from './Styles';
import Icons from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchBar from '../../Components/SearchBar/SearchBar';
import {Images} from '../../assets/Data';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
const MainScreen: React.FC = () => {
  const inset = useSafeAreaInsets();
  return (
    <ImageBackground
      source={Images.backgroundImage}
      resizeMode="cover"
      style={styles.container__main}
      testID="backgroundImage">
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <View
        style={[
          styles.container__menuIcons,
          {
            marginTop: 20 + inset.top,
          },
        ]}>
        <Icons name="bars" color="black" size={25} />
        <MaterialIcon
          name="cart-outline"
          color="white"
          size={25}
          style={styles.icon__cart}
        />
      </View>
      <SearchBar />
    </ImageBackground>
  );
};

export default MainScreen;
