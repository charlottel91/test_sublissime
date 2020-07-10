import React, { useState, useEffect } from 'react';
import { Text, View, Button, TouchableHighlight } from 'react-native';
import { useDispatch } from 'react-redux'
import axios from 'axios'
import CardsPokemon from './CardsPokemons';

const ListPokemon = ({ navigation }) => {
    const [list, setList] = useState([])
    const dispatch = useDispatch()
    console.log(list)

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=50`)
            .then(res => setList(res.data.results))
            .catch(err => alert(err))
    }, [])

    const handleClickPokemon = (i) => {
        dispatch({ type: "ADD_POKEMON", pokemon: list[i] })

    }

    return (
        <View>
            {list && list.map((el, i) => {
                return (
                    <TouchableHighlight key={i} 
                    onPress={() =>
                        navigation.navigate('Profile')
                    } 
                    onClick={handleClickPokemon(i)}>
                        <Text>{el.name}</Text>
                        <CardsPokemon url={el.url} />
                    </TouchableHighlight>
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