/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from '../Screens/MainScreen/MainScreen';
import DetailScreen from '../Screens/DetailScreen/DetailScreen';

const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Detail Screen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
