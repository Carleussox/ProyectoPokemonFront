import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/Pokemon.interface';
import { PokemonDetailsComponent } from '../pokemonDetails/pokemon-details.component';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  imports: [RouterModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  pokemonList: Pokemon[] = [];
 /*  selectedPokemonId: number= 0 ; */
  constructor(private pokeService: PokemonService) {
    this.getPokemon();
  }
  ngOnInit(): void {
    
  }

  getPokemon(): void {
    this.pokeService.allPokemons().subscribe(data => this.pokemonList = data);

  }
  /* loadDetail(pokemonId:number){
  this.selectedPokemonId= pokemonId;
  } */

  getTestPokemon(): void {
    this.pokeService.allPokemons().subscribe(data => this.pokemonList = data);

  }
}
