import React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import renderer from 'react-test-renderer';
import HomeScreen from '../screens/Home';

describe('<HomeScreen />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HomeScreen navigation={{ navigate: jest.fn() }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
