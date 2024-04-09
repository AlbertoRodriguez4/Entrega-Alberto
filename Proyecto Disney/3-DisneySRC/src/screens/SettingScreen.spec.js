import React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <SettingScreen navigation={{ navigate: jest.fn() }} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
