import {  Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { Pokemon } from '../../interfaces/Pokemon.interface';
import {  RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemon-details',
  providers: [Location],
  imports: [RouterModule],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss'
})
export class PokemonDetailsComponent implements OnInit{
  pokemon: Pokemon[] = [];
  
  constructor(private pokemonService: PokemonService,private location: Location){
   
    }


  ngOnInit(): void {
    this.pokemonService.selectedPokemon.subscribe(pokemon=>{
      if(pokemon){
        this.pokemon[0] = pokemon;
      }
    })
  }

  fetchNewPokemon(){
    /* this.pokemonService.getPokemon(1).subscribe(data=> {this.pokemon[0]= data
      console.log(data);
    }); */

    this.pokemonService.selectedPokemon.subscribe((data) => {
      if (data !== null) {
        this.pokemon[0] = data;
      }
    });
    
  }
}
