import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import axios from 'axios'

const CardsPokemon = (props) => {
    const [image, setImage] = useState()

    useEffect(() => {
        axios.get(`${props.url}`)
            .then(res => setImage(res.data.sprites.front_default))
            .catch(err => alert(err))
    }, [props.url])

    return (
        <View>
            <Image style={styles.url} source={ image } />
        </View>
    )
}

const styles = StyleSheet.create({ 
    url: {
        width: 80,
        height: 80,
    }
})

export default CardsPokemon