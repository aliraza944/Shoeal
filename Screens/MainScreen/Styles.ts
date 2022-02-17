/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {fonts} from '../../assets/Data';

export const styles = StyleSheet.create({
  container__main: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
  container__scrollview: {width: '100%', paddingHorizontal: 20},
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
  container__moreSneaker: {
    width: '100%',
    marginTop: 100,
  },
});
