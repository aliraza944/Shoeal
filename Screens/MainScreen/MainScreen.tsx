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
import SectionHeader from '../../Components/SectionHeader/SectionHeader';
import MoreSneakersCard from './MoreSneakersCard/MoreSneakersCard';
import {moreSneakerCardData} from '../../assets/Data';
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
        <SectionHeader title="New Arrival" subTitle="See All" />
        <NewArrivalCard />

        <View style={styles.container__moreSneaker}>
          <SectionHeader title="More Sneaker" subTitle="See All" />
          {moreSneakerCardData.map(item => (
            <MoreSneakersCard
              key={item.title}
              backgroundColor={item.backgroundColor}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default MainScreen;
