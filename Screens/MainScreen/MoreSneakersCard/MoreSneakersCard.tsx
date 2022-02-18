/* eslint-disable prettier/prettier */
import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import {IMoreCardData} from '../../../assets/Data';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const MoreSneakersCard: React.FC<IMoreCardData> = ({
  image,
  backgroundColor,
  price,
  title,
}) => {
  return (
    <View
      style={[
        styles.container__main,
        {
          backgroundColor: backgroundColor,
        },
      ]}>
      <View style={styles.container__image}>
        <Image source={image} style={styles.image__sneakers} />
      </View>
      <View style={styles.container__content}>
        <Text style={styles.text__title}>{title}</Text>
        <View style={styles.container__priceIcons}>
          <Text style={styles.text__price}>${price}</Text>
          <View style={styles.container__icons}>
            <MaterialIcon
              name="cart-arrow-down"
              color="black"
              size={15}
              style={styles.icons}
            />
            <MaterialIcon
              name="heart-outline"
              color="black"
              size={15}
              style={styles.icons}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MoreSneakersCard;
