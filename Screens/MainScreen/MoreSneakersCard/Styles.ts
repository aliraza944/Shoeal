/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {fonts} from '../../../assets/Data';

export const styles = StyleSheet.create({
  container__main: {
    width: 140,
    marginVertical: 40,
    borderRadius: 20,
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    position: 'relative',
    minHeight: 140,
  },
  container__image: {
    width: 120,
    height: 120,
    position: 'absolute',
    top: -40,
  },
  image__sneakers: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  container__content: {
    justifyContent: 'flex-end',
    width: '100%',
    alignItems: 'flex-start',
    flexGrow: 1,
  },
  text__title: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: 'white',
  },
  container__priceIcons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text__price: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: 'white',
  },
  container__icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%',
  },
  icons: {
    backgroundColor: '#F7DBD8',
    borderWidth: 1,
    borderColor: '#F7DBD8',
    borderRadius: 10,
    padding: 5,
  },
});
