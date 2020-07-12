const pokemons = {}

const pokemonReducer = (state = pokemons, { type, pokemon }) => {
    switch (type) {
        case "ADD_POKEMON":
            return {
                ...state, pokemon
            }
        default: return state
    }
}

export default pokemonReducer