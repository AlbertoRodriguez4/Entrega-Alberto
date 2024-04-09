import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/Home';
import SettingScreen from '../screens/SettingScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function NavigationTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name ='Home'
        component={HomeScreen}
        options={
          {
              tabBarLabel: "User",
              tabBarIcon : ({color, size}) =>(
                <Icon name='heart' color={color} size={size}/>
              )
          }
        }
        />
      <Tab.Screen name ='Settings'
        component={SettingScreen}
        options={
          {
              tabBarLabel: "User",
              tabBarIcon : ({color, size}) =>(
                <Icon name='user' color={color} size={size}/>
              )
          }
        }/>
    </Tab.Navigator>
  )
}