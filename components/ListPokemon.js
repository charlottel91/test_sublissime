import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios'

const ListPokemon = ({ navigation }) => {
    const [list, setList] = useState()
    const [image, setImage] = useState()

    const getPokemons = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=50`)
            .then(res => setList(res.data.results)
            .catch(err => alert(err))
    }

    const getPokemonsUrl = () => {

    }

    useEffect(() => {
        getPokemons()
    }, [getPokemons])

    return (
        <View>
            {/* <Text>{list}</Text> */}
            {list && list.map(pokemon => {
                return (
                    <View>
                        <Image source={pokemon.url} alt='poke' />
                        <Text>{pokemon.name}</Text>
                    </View>
                )
            })}
            <Button
                title='Back'
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

export default ListPokemon