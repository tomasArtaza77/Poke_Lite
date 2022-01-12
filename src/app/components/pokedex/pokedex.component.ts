import { Component, OnInit } from '@angular/core';
import { Pokemons } from 'src/app/pokemons.model';
import { ApiPokemonsService } from 'src/app/services/api-pokemons.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  titulo = 'Pokédex';

  constructor(private miServicio: ApiPokemonsService){

  }
  ngOnInit(): void {
    
  }

  pokemons: Pokemons[] = [
    new Pokemons("Pikachu", "Electrico", 11000,),
    new Pokemons("Bulbasaur", "Planta", 3000),
    new Pokemons("Charmander", "Fuego", 2500),
    new Pokemons("Charizard", "Fuego", 22000),
    new Pokemons("Squirtlea", "Agua", 2000),
  ];

  cuadroNombre: string = "";
  cuadroNivel: number = 0;
  cuadroTipo: string = "";
  

  agregarPokemon(){
    let pokemon=new Pokemons(this.cuadroNombre, this.cuadroTipo, this.cuadroNivel);
    this.pokemons.push(pokemon);
    this.miServicio.mostrarMensaje("Pokemon name: " + pokemon.nombre);
  }

}
