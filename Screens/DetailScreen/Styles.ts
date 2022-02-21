/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {fonts} from '../../assets/Data';

export const styles = StyleSheet.create({
  container__main: {
    paddingLeft: 20,
  },
  icon__left: {
    marginVertical: 20,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#FF8278',
    borderRadius: 10,
    paddingLeft: 10,
    paddingVertical: 5,
    width: 40,
  },
  container__title: {
    width: '100%',
    marginVertical: 40,
  },
  text__title: {
    fontFamily: fonts.medium,
    fontSize: 18,
    color: '#233567',
  },
  text__subtitle: {
    fontFamily: fonts.light,
    fontSize: 12,
    color: '#12162D',
  },
  container__image__content: {
    width: '100%',
    alignItems: 'flex-end',
    position: 'relative',
  },
  container__background: {
    width: 180,
    height: 200,
    backgroundColor: '#F5AF65',
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  container__icons: {
    marginLeft: 60,
    marginVertical: 20,
    height: 70,
    justifyContent: 'space-between',
  },
  icon__image__container: {
    backgroundColor: '#F7DBD8',
    padding: 2,
    borderRadius: 10,
  },
  container__image: {
    width: 250,
    height: 250,
    position: 'absolute',
    zIndex: 2,
    left: 60,
    top: -40,
  },
  image__shoe: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  text__description: {
    fontFamily: fonts.light,
    fontSize: 12,
    color: 'black',
    marginTop: 10,
  },
  text__price: {
    fontFamily: fonts.semiBold,
    fontSize: 12,
    color: 'black',
    marginTop: 10,
  },
  container__size: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  container__selectSize: {
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: 'black',
    padding: 0,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container__button: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: '#233567',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  button__text: {
    color: 'white',
    fontFamily: fonts.medium,
    fontSize: 15,
  },
});
