import React, { Component } from 'react'
import Pokedex from './Pokedex'

class Pokegame extends Component {
    static defaultProps = {
        pokemon: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ],
    }

    render() {
        let randIndex = () => (Math.floor(Math.random() * this.props.pokemon.length))
        let firstHandOfPokemons = [];
        let firstHandPokemonsExp = 0;
        let secondHandPokemonsExp = 0;
        let secondHandOfPokemons = [];
        let selectedPokemon = [];
        while (firstHandOfPokemons.length < 4) {
            let index = randIndex();
            if (!selectedPokemon.includes(index)) {
                firstHandOfPokemons.push(this.props.pokemon[index]);
                firstHandPokemonsExp += this.props.pokemon[index].base_experience;
                selectedPokemon.push(index);
            }
        }
        for (let i = 0; i < 8; i++) {
            if (!selectedPokemon.includes(i)) {
                secondHandOfPokemons.push(this.props.pokemon[i]);
                secondHandPokemonsExp += this.props.pokemon[i].base_experience;
            }
        }
        return (
            <div>
                <Pokedex pokemon={firstHandOfPokemons} totalExp={firstHandPokemonsExp} isWinner={firstHandPokemonsExp > secondHandPokemonsExp ? true : false} />
                <Pokedex pokemon={secondHandOfPokemons} totalExp={secondHandPokemonsExp} isWinner={firstHandPokemonsExp < secondHandPokemonsExp ? true : false} />
            </div>
        )
    }
}
export default Pokegame;