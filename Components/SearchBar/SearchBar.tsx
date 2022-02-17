/* eslint-disable prettier/prettier */
import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import Icons from 'react-native-vector-icons/Ionicons';
const SearchBar = () => {
  return (
    <View style={styles.container__main}>
      <TextInput placeholder="Search" style={styles.input__search} />
      <Icons name="ios-search-outline" size={20} color="#DFDFDF" />
    </View>
  );
};

export default SearchBar;
