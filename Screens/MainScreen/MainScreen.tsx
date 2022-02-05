/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './Styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomStatusbar from '../../Components/CustomStatusbar/CustomStatusbar';
const MainScreen: React.FC = () => {
  return (
    <View style={styles.container__main}>
      <CustomStatusbar backgroundColor="white" barStyle="dark-content" />
      <Text>Akram hayyat</Text>
    </View>
  );
};

export default MainScreen;
