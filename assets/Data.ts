/* eslint-disable prettier/prettier */
import backgroundImage from './Images/backgroundImage.png';
import burgerMenu from './Images/burgerMenu.png';
import shoppingCart from './Images/shoppingCart.png';
import shoe1 from './Images/shoe1.png';
import shoe2 from './Images/shoe2.png';
import shoe3 from './Images/shoe3.png';
import shoe4 from './Images/shoe4.png';
import more1 from './Images/more1.png';
import more2 from './Images/more2.png';
import detailscreen from './Images/detailscreen.png';
export const Images = {
  backgroundImage,
  burgerMenu,
  shoppingCart,
  shoe1,
  shoe2,
  shoe3,
  shoe4,
  more1,
  more2,
  detailscreen,
};

export const fonts = {
  bold: 'Poppins-Bold',
  extraBold: 'Poppins-ExtraBold',
  extraLight: 'Poppins-ExtraLight',
  light: 'Poppins-Light',
  medium: 'Poppins-Medium',
  regular: 'Poppins-Regular',
  semiBold: 'Poppins-SemiBold',
  thin: 'Poppins-Thin',
};

export const newArrivalCarousel = [
  {
    image: shoe1,
    title: 'Nike Air',

    price: 134,
  },
  {
    image: shoe2,
    title: 'Nike Run',

    price: 167,
  },
  {
    image: shoe3,
    title: 'Nike Air',

    price: 124,
  },
  {
    image: shoe4,
    title: 'Nike Jordans',

    price: 152,
  },
];

export interface IMoreCardData {
  image: HTMLImageElement;
  title: string;
  price: number;
  backgroundColor: string;
}

export const moreSneakerCardData: IMoreCardData[] = [
  {
    image: more1,
    title: 'Nike 270',
    price: 75,
    backgroundColor: '#FF8278',
  },
  {
    image: more2,
    title: 'Nike Air',
    price: 56,
    backgroundColor: '#F5AF65',
  },
];
