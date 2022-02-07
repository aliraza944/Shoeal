/* eslint-disable prettier/prettier */
import React from 'react';
import {ImageBackground, StatusBar, Text, View} from 'react-native';
import {styles} from './Styles';

import {Images} from '../../assets/Data';
const MainScreen: React.FC = () => {
  return (
    <ImageBackground
      source={Images.backgroundImage}
      resizeMode="cover"
      style={styles.container__main}
      testID="backgroundImage">
      <StatusBar hidden />
      <Text>Akram hayyat</Text>
    </ImageBackground>
  );
};

export default MainScreen;
