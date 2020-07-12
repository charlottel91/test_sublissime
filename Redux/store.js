import { createStore } from 'redux'
import PokemonReducer from './PokemonReducer'

const store = createStore(PokemonReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store