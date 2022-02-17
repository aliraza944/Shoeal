/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container__main: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  container__menuIcons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon__cart: {
    backgroundColor: '#233567',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    padding: 5,
  },
  container__title: {},
  text__title: {
    // fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
});
