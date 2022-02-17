/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {fonts} from '../../assets/Data';
export const styles = StyleSheet.create({
  container__main: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text__title: {
    fontSize: 18,
    fontFamily: fonts.regular,
    color: '#233567',
  },
  text__subTitle: {
    fontFamily: fonts.thin,
    color: 'white',
    textDecorationLine: 'underline',
    fontSize: 12,
  },
});
