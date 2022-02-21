/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from './Styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Images} from '../../assets/Data';
import {Prop} from '../../Navigation/MainStack/MainStack';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const DetailScreen: React.FC<Prop> = ({navigation}) => {
  const width = useSharedValue(0);
  const height = useSharedValue(-45);

  const heightStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotateZ: `${height.value}deg`}],
    };
  });
  const style = useAnimatedStyle(() => {
    return {
      width: width.value,
    };
  }, []);
  useEffect(() => {
    width.value = withTiming(180, {
      duration: 1000,
      easing: Easing.ease,
    });
    height.value = withTiming(0, {
      duration: 1000,
      easing: Easing.ease,
    });
  }, [width, height]);

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
          <Animated.View style={[styles.container__image, heightStyle]}>
            <Image source={Images.detailscreen} style={[styles.image__shoe]} />
          </Animated.View>
          <Animated.View style={[styles.container__background, style]}>
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
          </Animated.View>
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
