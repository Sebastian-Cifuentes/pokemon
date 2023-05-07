import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemons: Pokemon[] = [];
  private api_url = environment.api_url;

  constructor(
    private http: HttpClient
  ) { }

  get getPokemons(): Pokemon[] {
    return this.pokemons;
  }

  set setPokemons(pokemons: Pokemon[]) {
    this.pokemons = pokemons;
  }

  public getPokemonsFromApi(idAuthor: number) {
    const params = new HttpParams()
      .set('idAuthor', `${idAuthor}`);

    return this.http.get<{pokemons: Pokemon[]}>(`${this.api_url}`, { params })
              .subscribe(({pokemons}) => {
                this.setPokemons = pokemons;
              })
  }

  public createPokemon(pokemon: Pokemon) {
    return this.http.post(`${this.api_url}`, pokemon);
  }

  public editPokemon(id: number, pokemon: Pokemon) {
    return this.http.put(`${this.api_url}/${id}`, pokemon);
  }

  public deletePokemon(id: number) {
    return this.http.delete(`${this.api_url}/${id}`);
  }


}
