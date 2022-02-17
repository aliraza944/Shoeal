/* eslint-disable prettier/prettier */
import React from 'react';
import {
  ImageBackground,
  Image,
  StatusBar,
  Text,
  View,
  ScrollView,
} from 'react-native';
import {styles} from './Styles';
import Icons from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchBar from '../../Components/SearchBar/SearchBar';
import {Images} from '../../assets/Data';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

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
      <ScrollView contentContainerStyle={styles.container__scrollview}>
        <View
          style={[
            styles.container__menuIcons,
            {
              marginTop: 20 + inset.top,
            },
          ]}>
          <Icons name="bars" color="black" size={25} />
          <MaterialIcon
            name="cart-arrow-down"
            color="white"
            size={20}
            style={styles.icon__cart}
          />
        </View>
        <SearchBar />
        <View style={styles.container__title}>
          <Text style={styles.text__title}>New Arrivals</Text>
          <Text style={styles.text__subTitle}>See All</Text>
        </View>
        <NewArrivalCard />
      </ScrollView>
    </ImageBackground>
  );
};

export default MainScreen;
