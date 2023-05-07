import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PokemonSearchComponent,
    PokemonListComponent,
    PokemonInfoComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports: [
    PokemonSearchComponent,
    PokemonListComponent,
    PokemonInfoComponent
  ]
})
export class ComponentsModule { }
