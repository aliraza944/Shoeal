/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useCallback, useRef} from 'react';
import {Text, View, Dimensions, Image} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import {newArrivalCarousel} from '../../../assets/Data';
import {styles} from './Styles';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const windowWidth = Dimensions.get('window').width;
interface ItemProps {
  image: HTMLImageElement;
  title: string;

  price: number;
}

interface CustomCarouselProps {}
interface RenderItemProps {
  item: ItemProps;
  index: number;
}

const NewArrivalCard: React.FC<CustomCarouselProps> = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [carouselItems, setCarouselItems] =
    useState<ItemProps[]>(newArrivalCarousel);
  const ref = useRef(null);

  const renderItem = useCallback(({item, index}: RenderItemProps) => {
    return (
      <View style={styles.container__main}>
        <View style={styles.container__image}>
          <Image source={item.image} style={styles.image__shoe} />
        </View>
        <View style={styles.container__content}>
          <Text style={styles.text__title}>{item.title}</Text>
          <View style={styles.container__pricecarticon}>
            <Text style={styles.text__price}>${`${item.price} `}</Text>
            <MaterialIcon
              name="cart-arrow-down"
              color="white"
              size={15}
              style={styles.icon__cart}
            />
          </View>
        </View>
      </View>
    );
  }, []);

  return (
    <Carousel
      layout={'default'}
      ref={ref}
      data={carouselItems}
      sliderWidth={windowWidth}
      itemWidth={150}
      renderItem={renderItem}
      onSnapToItem={(index: number) => setActiveIndex(index)}
      layoutCardOffset={500}
      inactiveSlideScale={1}
      activeSlideAlignment="start"
      activeAnimationType="timing"
      inactiveSlideShift={0}
      inactiveSlideOpacity={1}
    />
  );
};

export default NewArrivalCard;
