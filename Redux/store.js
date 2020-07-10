import { createStore } from 'redux'
import PokemonReducers from './PokemonReducer'

const store = createStore(PokemonReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store