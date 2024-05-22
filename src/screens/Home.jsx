import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Home({ navigation }) {
    return (
        <View style={{ paddingHorizontal: 20 }}>
            <Text>Home</Text>
            <Button title='GO PROFILE' onPress={() => navigation.navigate('profile')} />
        </View>
    )
}