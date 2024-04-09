import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/Home';
import SettingScreen from '../screens/SettingScreen';

const Stack = createStackNavigator();

export default function NavigationStacks() {
  return (
    //Navigation Stacks//
    <Stack.Navigator>
      <Stack.Screen name ='Home' component={HomeScreen}/>
      <Stack.Screen name ='Settings' component={SettingScreen}/>
    </Stack.Navigator>
  )
}