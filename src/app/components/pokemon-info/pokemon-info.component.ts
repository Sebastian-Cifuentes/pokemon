import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss']
})
export class PokemonInfoComponent implements OnInit {

  get name(): AbstractControl {
    return this.form.get('name') as AbstractControl;
  }

  get defense(): AbstractControl {
    return this.form.get('defense') as AbstractControl;
  }

  get attack(): AbstractControl {
    return this.form.get('attack') as AbstractControl;
  }

  get image(): AbstractControl {
    return this.form.get('image') as AbstractControl;
  }

  @ViewChild('pokemonModal') pokemonModal!: ElementRef;
  @Output() onclosemodal: EventEmitter<any> = new EventEmitter<any>();
  pokemon!: Pokemon | undefined;
  isEdit = false;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  openModal() {
  }
  
  closeModal() {
    this.onclosemodal.emit(true);
  }

  buildForm() {
    this.form = this.fb.group({
      name: new FormControl(this.pokemon?.name ?? '', [Validators.required]),
      image: new FormControl(this.pokemon?.image ?? '', [Validators.required]),
      attack: new FormControl(this.pokemon?.attack ?? '', [Validators.required]),
      defense: new FormControl(this.pokemon?.defense ?? '', [Validators.required]),
    }); 
  }

  send() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    };
    console.log(this.form.value);
  }

}
