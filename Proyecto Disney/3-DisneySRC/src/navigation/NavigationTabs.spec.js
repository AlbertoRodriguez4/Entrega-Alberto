import React from 'react';
import { View, Text } from 'react-native';
import NavigationTabs from '../navigation/NavigationTabs';

test('NavigationTabs has two screens', () => {
  const component = renderer.create(<NavigationTabs />);
  const instance = component.root;
  const children = instance.findAllByType(Tab.Screen);
  expect(children.length).toBe(2);
});

