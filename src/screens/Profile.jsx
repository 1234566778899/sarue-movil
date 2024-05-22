import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Profile({ navigation }) {
    return (
        <View style={{ paddingHorizontal: 20 }}>
            <Text>Profile</Text>
            <Button title='REGRESAR' onPress={() => navigation.goBack()} />
        </View>
    )
}