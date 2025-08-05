import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/Pokemon.interface';
import { PokemonDetailsComponent } from '../pokemonDetails/pokemon-details.component';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-pokemon-list',
  imports: [RouterModule, CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent implements OnInit {
  pokemonList: Pokemon[] = [];
  selectedPokemonId: number = 0;
  showDetails = false;
  constructor(private pokeService: PokemonService, private cdr: ChangeDetectorRef) {
  

  }
  ngOnInit(): void {
    this.getPokemon();

  }
  selectPokemon(pokemon: Pokemon) {
    this.pokeService.setSelectedPokemon(pokemon);
  }
  getPokemon(): void {

    this.pokeService.allPokemons().subscribe(data => {
      this.pokemonList = data
      this.cdr.detectChanges();
      /* Se añade change detector Reference para forzar la actualización de datos: 
        This happened because Angular’s new control flow syntax (@if, @for) uses a more advanced change detection strategy.
        When you update data inside an asynchronous callback (like an Observable’s subscribe),
        Angular sometimes doesn’t automatically detect changes in components using the new block syntax,
        especially if the callback runs outside Angular’s default zone.
      
        By calling ChangeDetectorRef.detectChanges(), you manually trigger Angular to check for updates and re-render the template.
        This ensures your component displays the new data immediately after it arrives.
      
        Summary:
      
          -The template didn’t update because Angular didn’t detect the change after the async data arrived.
          -Manually triggering change detection (detectChanges()) fixed the issue.
          -This is more common with the new block syntax and async operations.
            
            */
    });
  }
  loadDetail(pokemonId: number) {
    const selected = this.pokemonList.find(p=>p.pokemonId === pokemonId);
    if(selected){
      this.pokeService.setSelectedPokemon(selected);
      this.showDetails = true;
    }
    this.selectedPokemonId = pokemonId;
  }

}
