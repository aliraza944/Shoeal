/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from '../../Screens/MainScreen/MainScreen';
import DetailScreen from '../../Screens/DetailScreen/DetailScreen';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
export type RootStackParams = {
  Home: undefined;
  DetailScreen: undefined;
};

export type Prop = NativeStackScreenProps<RootStackParams>;

const Stack = createNativeStackNavigator<RootStackParams>();
const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={() => ({
          tabBarStyle: {
            backgroundColor: 'black',
          },
          tabBarLabelStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          contentStyle: {
            backgroundColor: 'white',
          },
        })}>
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
