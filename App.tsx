/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import MainStack from './Navigation/MainStack/MainStack';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <MainStack />
    </SafeAreaProvider>
  );
};

export default App;
