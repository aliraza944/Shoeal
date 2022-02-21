/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from './Styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Images} from '../../assets/Data';
import {Prop} from '../../Navigation/MainStack/MainStack';
const DetailScreen: React.FC<Prop> = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container__main}>
        <StatusBar barStyle="dark-content" backgroundColor={'white'} />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons
            name="chevron-left"
            size={20}
            color="#FF8278"
            style={styles.icon__left}
          />
        </TouchableOpacity>
        <View style={styles.container__title}>
          <Text style={styles.text__title}>Nike Air Force 270</Text>
          <Text style={styles.text__subtitle}>
            With extra comfort and areodynamics
          </Text>
        </View>
        <View style={styles.container__image__content}>
          <View style={styles.container__image}>
            <Image source={Images.detailscreen} style={styles.image__shoe} />
          </View>
          <View style={styles.container__background}>
            <View style={styles.container__icons}>
              <Icons
                name="heart"
                size={27}
                color="red"
                style={styles.icon__image__container}
              />
              <Icons
                name="share"
                size={27}
                color="#233567"
                style={styles.icon__image__container}
              />
            </View>
          </View>
        </View>
        <Text style={styles.text__description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
        <View>
          <Text style={styles.text__price}>Price : $199</Text>
        </View>
        <View style={styles.container__size}>
          <View>
            <Text style={styles.text__price}>Size:</Text>
          </View>
          <View style={styles.container__selectSize}>
            <Text>S</Text>
          </View>
          <View style={styles.container__selectSize}>
            <Text>M</Text>
          </View>
          <View style={styles.container__selectSize}>
            <Text>L</Text>
          </View>
          <View style={styles.container__selectSize}>
            <Text>XL</Text>
          </View>
        </View>
        <View style={styles.container__button}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.button__text}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;
