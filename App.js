import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//Components
import Home from './components/Home'
import ListPokemon from './components/ListPokemon'
import Profile from './components/Profile'

// const Navigator = createStackNavigator({
//   Home: { screen: Home },
//   ListPokemon: { screen: ListPokemon },
//   // Profile: { screen: Profile }
// });

// const App = createAppContainer(Navigator);

// export default App;

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="ListPokemon" component={ListPokemon} options={{ title: 'Chose your Pokemons' }}/>
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
