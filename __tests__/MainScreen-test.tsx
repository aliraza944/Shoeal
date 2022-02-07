/* eslint-disable prettier/prettier */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import MainScreen from '../Screens/MainScreen/MainScreen';
import {render} from '@testing-library/react-native';
it('renders main screen', () => {
  renderer.create(<MainScreen />);
});
it('renders akram hayyat', () => {
  const {getByText} = render(<MainScreen />);
  console.log(getByText);
  const element = getByText('Akram hayyat');
  expect(element).toBeTruthy();
});

it('displays the background image', () => {
  const {getByTestId} = render(<MainScreen />);
  expect(getByTestId('backgroundImage')).toBeTruthy();
});
