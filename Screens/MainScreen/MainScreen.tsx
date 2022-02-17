/* eslint-disable prettier/prettier */
import React from 'react';
import {ImageBackground, Image, StatusBar, Text, View} from 'react-native';
import {styles} from './Styles';
import Icons from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchBar from '../../Components/SearchBar/SearchBar';
import {Images, newArrivalCarousel} from '../../assets/Data';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import NewArrivalCard from './NewArrivalCard/NewArrivalCard';
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
      <View style={styles.container__title}>
        <Text style={styles.text__title}>New Arrivals</Text>
        <Text style={styles.text__subTitle}>See All</Text>
      </View>
      <NewArrivalCard />
    </ImageBackground>
  );
};

export default MainScreen;
