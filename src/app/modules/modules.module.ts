import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { DynamicComponentDirective } from '../directives/dynamic-component.directive';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: PokemonsComponent
  }
];

@NgModule({
  declarations: [
    PokemonsComponent,
    DynamicComponentDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    MatIconModule
  ]
})
export class ModulesModule { }
