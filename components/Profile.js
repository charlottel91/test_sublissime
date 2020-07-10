import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import Axios from 'axios'


const Profile = () => {
    const [pokemon, setPokemon] = useSelector(state => state.pokemons.pokemon)
    const [image, setImage] = useState()
    const [stats, setStats] = useState()

    useEffect(() => {
        Axios.get(`${pokemon.url}`)
            .then(res => {
                setImage(res.data.sprites.front_default)
                setStats(res.data.stats)
            })
            .catch(err => alert(err))
    })

    return (
        <View>
            <Text>{pokemon.name}</Text>
            <Image source={image} />
            <Text>{pokemon.name}</Text>

            <Button
                title='Back'
                onPress={() => navigation.navigate('ListPokemon')}
            />
        </View>
    )
}

export default Profile;