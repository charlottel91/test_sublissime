import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Gif from '../assets/GIF.webp'
// Components
import Navbar from './Navbar'

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Catch me if you want !!!</Text>
            <Image
            style={styles.gif}
            source={Gif}
            />
            <Navbar navigation={navigation} />
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
  text: {
      color: 'gray', 
      fontSize: 30,
      fontWeight: 'bold'
  },
  gif: {
      width: 300,
      height: 300,
  }
});

export default Home;