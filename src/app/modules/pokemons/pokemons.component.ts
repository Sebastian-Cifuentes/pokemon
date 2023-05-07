import { Component, ComponentRef, OnInit, ViewChild } from '@angular/core';
import { DynamicComponentDirective } from 'src/app/directives/dynamic-component.directive';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonInfoComponent } from '../../components/pokemon-info/pokemon-info.component';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  pokemons: Pokemon[] = [
    {
      name: 'Bulbasaur',
      image: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/74/latest/20230210210358/EP1230_Bulbasaur_de_Ash.png/640px-EP1230_Bulbasaur_de_Ash.png',
      attack: 87,
      defense: 76,
      hp: 99,
      type: 'Nature',
      id_author: 1
    }
  ]; 


  @ViewChild(DynamicComponentDirective) dynamic!: DynamicComponentDirective;
  infoComponent!: ComponentRef<PokemonInfoComponent>;

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
  }

  openModal(isEdit: boolean, pokemon?: Pokemon) {
    const viewContainerRef = this.dynamic.viewContainerRef;
    this.infoComponent = viewContainerRef.createComponent(PokemonInfoComponent);
    this.infoComponent.instance.isEdit = isEdit;
    this.infoComponent.instance.pokemon = pokemon;
    this.infoComponent.instance.onclosemodal.subscribe((event) => {
      this.closeModal();
    });
  }

  closeModal() {
    this.infoComponent.destroy();
  }

}
