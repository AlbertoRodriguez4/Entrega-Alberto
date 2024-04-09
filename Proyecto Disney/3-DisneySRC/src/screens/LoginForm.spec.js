import React from 'react'
import { View, Text } from 'react-native'

describe('LoginForm', () => {
    it('should render correct with name and surname', () => {
        const wrapper = shallow(<LoginForm name="Gabriel" surname="Milagro López"/>
        )
        expect(wrapper.contains(<View></View>)).toBe(true)
        expect(wrapper.contains(
            <Text>Gabriel Milagro López</Text>
        )).toBe(true)
    })
})

