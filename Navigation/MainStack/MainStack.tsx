/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from '../../Screens/MainScreen/MainScreen';
import DetailScreen from '../../Screens/DetailScreen/DetailScreen';
// import type {StackNavigationOptions} from '@react-navigation/stack';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
export type RootStackParams = {
  Home: undefined;
  DetailScreen: undefined;
};

export type Prop = NativeStackScreenProps<RootStackParams>;

const Stack = createNativeStackNavigator<RootStackParams>();

// const config = {
//   animation: 'spring',
//   config: {
//     stiffness: 1000,
//     damping: 500,
//     mass: 3,
//     overshootClamping: true,
//     restDisplacementThreshold: 0.01,
//     restSpeedThreshold: 0.01,
//   },
// };
// const closeConfig = {
//   animation: 'timing',
//   config: {
//     duration: 200,
//   },
// };
// const options = {
//   headerShown: true,
//   gestureDirection: 'horizontal',
//   transitionSpec: {
//     open: config,
//     close: closeConfig,
//   },
// };

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={() => ({
          tabBarStyle: {
            backgroundColor: 'black',
          },

          gestureEnabled: true,
          gestureDirection: 'horizontal',

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
          options={{
            headerShown: false,
            animation: 'slide_from_right',
            gestureEnabled: true,
          }}
        />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
            gestureEnabled: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
