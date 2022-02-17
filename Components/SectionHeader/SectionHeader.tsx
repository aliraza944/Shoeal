/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './Styles';

interface IProps {
  title: string;
  subTitle: string;
}

const SectionHeader: React.FC<IProps> = ({title, subTitle}) => {
  return (
    <View style={styles.container__main}>
      <Text style={styles.text__title}>{title}</Text>
      <Text style={styles.text__subTitle}>{subTitle}</Text>
    </View>
  );
};

export default SectionHeader;
