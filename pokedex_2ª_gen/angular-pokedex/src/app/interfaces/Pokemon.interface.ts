import { PokemonStats } from "./PokemonStats.interface";

export interface Pokemon {
    
    pokemonId:number;
    name: string;
    generation:number;
    legendary: boolean;
    type1: string;
    type2: string;
    pokemonStats: PokemonStats;

}