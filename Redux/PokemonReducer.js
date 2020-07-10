export const pokemons = {}

const pokemonReducers = (state=pokemon, {type, pokemon}) => {
    switch(type) {
        case "ADD POKEMON":
            return{
                ...state, pokemon: {...state, pokemon}
            }
    }
}

export default pokemonReducers