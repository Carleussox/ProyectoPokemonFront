import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Pokemon } from './interfaces/Pokemon.interface';
import { PokemonListComponent } from "./components/pokemon-list.component/pokemon-list.component";
import { PokemonDetailsComponent } from './components/pokemonDetails/pokemon-details.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, PokemonListComponent,PokemonDetailsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected title = 'Pokedex';
  
}
