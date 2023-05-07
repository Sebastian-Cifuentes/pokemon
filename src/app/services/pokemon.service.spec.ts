import { TestBed, fakeAsync } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';
import { Pokemon } from '../models/pokemon.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [PokemonService]
  }));

  it('should be return a list of pokemons', (done: DoneFn) => {
      const service: PokemonService = TestBed.get(PokemonService);
      service.getPokemonsFromApi(1);
      const pokemons: Pokemon[] = service.getPokemons;
      expect(pokemons).toBeTruthy();
      done();
  });

  it('should be created', (done: DoneFn) => {
    const service: PokemonService = TestBed.get(PokemonService);
    service.createPokemon({type: 'Fire', name: 'Charmander', image: 'test', id_author: 1, hp: 95, defense: 65, attack: 90})
      .subscribe({
        next: (data: any) => {
          console.log(data);
          expect(data).toBeTruthy();
          done();
        }
      })
  });

  it('should be edit', (done: DoneFn) => {
    const service: PokemonService = TestBed.get(PokemonService);
    service.editPokemon(100, {type: 'Fire', name: 'Charmander', image: 'test', id_author: 1, hp: 95, defense: 65, attack: 90})
      .subscribe({
        next: (data: any) => {
          expect(data).toBeTruthy();
          done();
        }
      })
  });

  it('should be delete', (done: DoneFn) => {
    const service: PokemonService = TestBed.get(PokemonService);
    service.deletePokemon(100)
      .subscribe({
        next: (data: any) => {
          expect(data).toBeTruthy();
          done();
        }
      })
  });
});
