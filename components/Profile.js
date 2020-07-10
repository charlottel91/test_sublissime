import React from 'react'
import { View, Text } from 'react-native'


const Profile = () => {
    return (
        <View>
            <Text>Profile</Text>
            <Button
                title='Back'
                onPress={() => navigation.navigate('ListPokemon')}
            />
        </View>
    )
}

export default Profile;