/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {fonts} from '../../../assets/Data';

export const styles = StyleSheet.create({
  container__main: {
    backgroundColor: '#F8F8F8',
    borderRadius: 20,
    height: 200,
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  container__image: {
    width: 120,
    height: 120,
  },
  image__shoe: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  container__content: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  text__title: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: '#12162D',
  },
  container__pricecarticon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  icon__cart: {
    backgroundColor: '#233567',
    borderWidth: 1,
    borderColor: '#233567',
    borderRadius: 4,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text__price: {
    color: 'black',
    fontFamily: fonts.regular,
    fontSize: 12,
  },
});
