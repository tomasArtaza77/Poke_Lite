import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemons } from '../pokemons.model';

@Injectable({
  providedIn: 'root'
})
export class ApiPokemonsService {

  url = '/pokedex-api/pokemon';

  pokemons: Pokemons[] = [
    new Pokemons("Pikachu", "Electric", 11000,),
    new Pokemons("Bulbasaur", "Grass", 3000),
    new Pokemons("Charmander", "Fire", 2500),
    new Pokemons("Charizard", "Fire", 22000),
    new Pokemons("Squirtlea", "Water", 2000),
  ];


  constructor(private http: HttpClient){
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
  /*
  getPokemons(){
    console.log("servicio pokemon");
    return this.http.get(this.url); 
  }
  */
  postRequest(url: string, data = {}) {
    return this.http.post(url, data);
  }
  

}
