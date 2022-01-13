import { Injectable } from '@angular/core';
import { Pokemons } from '../pokemons.model';

@Injectable({
  providedIn: 'root'
})
export class ApiPokemonsService {

  pokemons: Pokemons[] = [
    new Pokemons("Pikachu", "Electric", 11000, "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png"),
    new Pokemons("Bulbasaur", "Grass", 3000, "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"),
    new Pokemons("Charmander", "Fire", 2500, "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png"),
    new Pokemons("Charizard", "Fire", 22000, "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png"),
    new Pokemons("Squirtlea", "Water", 2000, "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png")
  ];


  constructor(){
    console.log("servicio pokemon");
  }

  mostrarMensaje(mensaje:string){
    alert(mensaje);
  }


  getPokemons(i: number){
    let pokemon: Pokemons = this.pokemons[i];
    return pokemon;
  }

  updatePokemon(pokemon: Pokemons, i: number) {
    let pokemonUpdate = this.pokemons[i];
    pokemonUpdate.nombre = pokemon.nombre;
    pokemonUpdate.tipo = pokemon.tipo;
    pokemonUpdate.nivel = pokemon.nivel;
  }

  deletePokemon(i: number) {
    this.pokemons.splice(i,1);
  }
  

}
