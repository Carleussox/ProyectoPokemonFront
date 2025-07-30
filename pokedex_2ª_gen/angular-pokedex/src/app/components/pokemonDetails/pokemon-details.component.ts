import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { Pokemon } from '../../interfaces/Pokemon.interface';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemon-details',
  providers: [Location],
  imports: [RouterModule],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss'
})
export class PokemonDetailsComponent implements OnInit, AfterContentChecked {
  pokemon: Pokemon[] = [];
  constructor(private route: ActivatedRoute,private pokemonService: PokemonService,private location: Location){
   
  }
  ngAfterContentChecked(): void {
     this.pokemonService.allPokemons().subscribe(data=> this.pokemon = data);
  }


  ngOnInit(): void {
    
  }

  fetchNewPokemon(){
    this.pokemonService.getPokemon(1).subscribe(data=> this.pokemon[0]= data);
  }
}
