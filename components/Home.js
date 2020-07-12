import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Gif from '../assets/GIF.webp'
// Components
import Navbar from './Navbar'

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.container_gif}>
            <Text style={styles.text}>Catch me if you can!</Text>
            <Image
                style={styles.gif}
                source={Gif}
            />
            </View>
            <Navbar styles={styles.nav} navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 5
    },
    container_gif: {
        marginBottom: 100
    },
    text: {
        color: 'gray',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },
    gif: {
        width: 300,
        height: 300,
    },
    nav: {
        
    }
});

export default Home;