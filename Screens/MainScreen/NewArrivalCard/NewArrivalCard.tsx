/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useCallback, useRef} from 'react';
import {Text, View, Dimensions} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import {styles} from './Styles';
const windowWidth = Dimensions.get('window').width;
interface ItemProps {
  title: string;
  text: string;
}

interface CustomCarouselProps {}
interface RenderItemProps {
  item: ItemProps;
  index: number;
}

const exampleItems = [
  {
    title: 'Item 1',
    text: 'Text 1',
  },
  {
    title: 'Item 2',
    text: 'Text 2',
  },
  {
    title: 'Item 3',
    text: 'Text 3',
  },
  {
    title: 'Item 4',
    text: 'Text 4',
  },
  {
    title: 'Item 5',
    text: 'Text 5',
  },
];

const NewArrivalCard: React.FC<CustomCarouselProps> = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [carouselItems, setCarouselItems] = useState<ItemProps[]>(exampleItems);
  const ref = useRef(null);

  const renderItem = useCallback(({item, index}: RenderItemProps) => {
    return (
      <View style={styles.container__main}>
        <Text style={{fontSize: 30}}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  }, []);

  return (
    <Carousel
      layout={'default'}
      ref={ref}
      data={carouselItems}
      sliderWidth={windowWidth}
      itemWidth={200}
      renderItem={renderItem}
      onSnapToItem={(index: number) => setActiveIndex(index)}
      layoutCardOffset={500}
      inactiveSlideScale={1}
      activeSlideAlignment="start"
      activeAnimationType="timing"
      inactiveSlideShift={0}
    />
  );
};

export default NewArrivalCard;
