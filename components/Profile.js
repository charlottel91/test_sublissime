import React, { useEffect, useState } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import Axios from 'axios'
import { set } from 'react-native-reanimated'


const Profile = ({ navigation }) => {
    const pokemon = useSelector(state => state.pokemon)
    const [image, setImage] = useState()
    const [stats, setStats] = useState()
    const [attacks, setAttacks] = useState()

    useEffect(() => {
        Axios.get(`${pokemon.url}`)
            .then(res => {
                setImage(res.data.sprites.front_default)
                setStats(res.data.stats)
                setAttacks(res.data.moves)
            })
            .catch(err => alert(err))
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{pokemon.name.toUpperCase()}</Text>
            <Image style={styles.image} source={image} />
            <Text>{pokemon.name}</Text>
            <View>
                <Text style={styles.text}>STATS</Text>
                <View style={styles.container_stats}>
                    {stats && stats.map((el, i) => {
                        return (
                            <View key={i} style={styles.stats}>
                                <Text style={styles.text}>{el.stat.name.charAt(0).toUpperCase() + el.stat.name.substring(1).toLowerCase()} : {el.base_stat}</Text>
                            </View>
                        )
                    })
                    }
                </View>
            </View>
            <View>
                <Text style={styles.text}>ALL ATTACKS</Text>
                <View style={styles.container_attacks}>
                    {attacks && attacks.map((el, i) => {
                        return (
                            <View key={i} style={styles.attacks}>
                                <Text style={styles.text}>{el.move.name.charAt(0).toUpperCase() + el.move.name.substring(1).toLowerCase()}, </Text>
                            </View>
                        )
                    })
                    }
                </View>
            </View>
            <Button
                title='Back'
                onPress={() => navigation.navigate('ListPokemon')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        height: '100%',
        flexDirection: 'column', 
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 'auto', 
        marginTop: 10
    },
    image: {
        width: 200,
        height: 200,
        margin: 'auto'
    },
    container_stats: {
        borderColor: '#ffffff',
        borderWidth: 1,
        width: 200,
        height: 'auto',
        marginHorizontal: 'auto',
        marginVertical: 5,
        padding: 10
    },
    stats: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: 5
    },
    text: {
        fontSize: 16,
        color: '#fff', 
        textAlign: 'center'
    },
    container_attacks: {
        borderColor: '#ffffff',
        borderWidth: 1,
        width: 350,
        height: 'auto',
        marginHorizontal: 'auto',
        marginVertical: 10,
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    attacks: {

    }
})

export default Profile;