import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios'

const CardsPokemon = (props) => {
    const [image, setImage] = useState()
    console.log(image)

    useEffect(() => {
        axios.get(`${props.url}`)
            .then(res => setImage(res.data.sprites.front_default))
            .catch(err => alert(err))
    }, [props.url])

    return (
        <View style={styles.image}>
            <Image source={`${image}`} />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
        margin: 20
    }
})

export default CardsPokemon