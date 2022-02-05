/* eslint-disable prettier/prettier */
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {View, StatusBar} from 'react-native';

interface IProps {
  backgroundColor: string;
  barStyle: 'default' | 'light-content' | 'dark-content';
}

const CustomStatusbar: React.FC<IProps> = ({backgroundColor, barStyle}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{height: insets.top, backgroundColor}}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </View>
  );
};
export default CustomStatusbar;
