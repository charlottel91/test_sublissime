import React from 'react';
import { Image, StyleSheet, TouchableHighlight, View, Button } from 'react-native';
import Pokedex from '../assets/pokedex.png'
import Pokeball from '../assets/pokeball.png'

const Navbar = ({ navigation }) => {
    return (
        <View style={styles.navbar}>
            <TouchableHighlight onPress={() =>
                navigation.navigate('ListPokemon')
            } >
                <Image
                    style={styles.image}
                    source={Pokedex}

                />
            </TouchableHighlight>
            <Image
                style={styles.image}
                source={Pokeball}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
    },
    image: {
        width: 70,
        height: 70,
        margin: 20
    }
})

export default Navbar