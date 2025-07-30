import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Pokemon } from '../../interfaces/Pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient){
    
  }


  allPokemons(): Observable<any>{
    return this.http.get('http://localhost:8080/allPokemon');
  }


  getPokemon(id: number): Observable<any>{
    let parametros = new HttpParams();
    parametros.append('id',id.toString());
    const pokemon  = this.http.get(`http://localhost:8080/fetchPokemon`,{params: parametros});
   
    return of(pokemon);
  }
  //TODO implementar interfaz Pokemon
  /* getPokemon(id:number): Observable<Pokemon>{} */
}
