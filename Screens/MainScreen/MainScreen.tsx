/* eslint-disable prettier/prettier */
import React from 'react';
import {ImageBackground, StatusBar, Text, View} from 'react-native';
import {styles} from './Styles';

import {Images} from '../../assets/Data';
// type StatusBarStyle = 'default' | 'light-content' | 'dark-content';
const MainScreen: React.FC = () => {
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
      <Text>Akram hayyat</Text>
    </ImageBackground>
  );
};

export default MainScreen;
