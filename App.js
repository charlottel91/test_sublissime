import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
//Components
import Home from './components/Home'
import ListPokemon from './components/ListPokemon'
import Profile from './components/Profile'
import Store from './Redux/store'


const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="ListPokemon" component={ListPokemon} options={{ title: 'Choose your Pokemons' }} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
