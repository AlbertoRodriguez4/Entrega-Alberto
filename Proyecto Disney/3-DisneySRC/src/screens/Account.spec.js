import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

describe('Account component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Account />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
