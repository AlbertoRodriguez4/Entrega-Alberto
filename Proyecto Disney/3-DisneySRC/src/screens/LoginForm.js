import { View, Text } from 'react-native'
import React from 'react'

export default function LoginForm(props) {
    //Bundle, parámetrosentre PANTALLAS
    console.log(props);
    const {name, surname} = props;
  return (
    <View>
      <Text>{name} {surname}</Text>
    </View>
  )
}