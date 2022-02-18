/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import {IMoreCardData} from '../../../assets/Data';
const MoreSneakersCard: React.FC<IMoreCardData> = ({
  image,
  backgroundColor,
  price,
  title,
}) => {
  return (
    <View style={styles.container__main}>
      <Text>MoreSneakersCard</Text>
    </View>
  );
};

export default MoreSneakersCard;
