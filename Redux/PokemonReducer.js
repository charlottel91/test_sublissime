export const pokemons = {}

const pokemonReducers = (state=pokemons, {type, pokemon}) => {
    switch(type) {
        case "ADD_POKEMON":
            return{
                ...state, pokemon: {...state, pokemon}
            }
    }
}

export default pokemonReducers