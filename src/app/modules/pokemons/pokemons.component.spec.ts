import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsComponent } from './pokemons.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { PokemonInfoComponent } from 'src/app/components/pokemon-info/pokemon-info.component';

describe('PokemonsComponent', () => {
  let component: PokemonsComponent;
  let fixture: ComponentFixture<PokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ], 
      declarations: [ PokemonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a title in h3 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Listado de pokemons');
  });
  it('should open modal without pokemon info', () => {
    component.openModal(false);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.directive(PokemonInfoComponent))).toBeTruthy();
  });

  it('should close modal', () => {
    component.openModal(false);
    component.closeModal();
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('app-pokemon-info'))).toBeNull();
  });
});
