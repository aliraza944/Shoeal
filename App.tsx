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

import React from 'react';

import MainStack from './Navigation/MainStack/MainStack';

import {SafeAreaProvider} from 'react-native-safe-area-context';
const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <MainStack />
    </SafeAreaProvider>
  );
};

export default App;
