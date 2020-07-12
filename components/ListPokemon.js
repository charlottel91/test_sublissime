import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, TouchableHighlight } from 'react-native';
import { useDispatch } from 'react-redux'
import axios from 'axios'
import CardsPokemon from './CardsPokemons';

const ListPokemon = ({ navigation }) => {
    const [list, setList] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=50`)
            .then(res => setList(res.data.results))
            .catch(err => alert(err))
    }, [])

    const handleClickPokemon = (i) => {
        console.log(list && list[0].name)
        dispatch({ type: "ADD_POKEMON", pokemon: list[i] })
    }

    return (
        <View style={styles.container}>
            <View style={styles.allPokemon}>
                {list && list.map((el, i) => {
                    return (
                        <TouchableHighlight key={i}
                            style={styles.pokemon}
                            onPress={() => {
                                navigation.navigate('Profile')
                                handleClickPokemon(i)
                            }}
                        >
                            <View style={styles.detailPokemon}>
                                <CardsPokemon style={styles.image} url={el.url} />
                                <Text style={styles.text}>{el.name.toUpperCase()}</Text>
                            </View>
                        </TouchableHighlight>
                    )
                })}
            </View>
            <View>
                <Button
                    title='Back'
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000'
    },
    allPokemon: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    detailPokemon: {
        margin: 'auto',
        flexDirection: 'column'
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
        margin: 'auto'
    },
    pokemon: {
        borderColor: '#ffffff',
        borderWidth: 1,
        marginHorizontal: 'auto',
        marginVertical: 10,
        width: 120,
        height: 120
    }
})

export default ListPokemon