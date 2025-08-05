import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Pokemon } from '../../interfaces/Pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private selectedPokemonSubject = new BehaviorSubject<Pokemon |null>(null);
  selectedPokemon = this.selectedPokemonSubject.asObservable();

  
  constructor(private http: HttpClient){
    
  }


  allPokemons(): Observable<any>{
    return this.http.get('http://localhost:8080/allPokemon');
  }


  getPokemon(id: number): Observable<any>{
   
    return this.http.get<Pokemon>(`http://localhost:8080/fetchPokemon?id=`+ id);
  }
  //TODO implementar interfaz Pokemon
  /* getPokemon(id:number): Observable<Pokemon>{} */
  setSelectedPokemon(pokemon:Pokemon){
    this.selectedPokemonSubject.next(pokemon);
  }
}
