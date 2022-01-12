import { Component, Input, OnInit } from '@angular/core';
import { Pokemons } from 'src/app/pokemons.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() pokemonsLista: Pokemons; 
  @Input() indice: number;

  constructor() { }

  ngOnInit(): void {
  }

  arrayPokemons = ['']; 

  agregarCaracteristica(pokemon: string) {
    this.arrayPokemons.push(pokemon);
  }

}
