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

  constructor(private pokeService: ApiPokemonsService){

  }
  ngOnInit(): void {
    this.pokemons = this.pokeService.pokemons;
  }

  pokemons: Pokemons[] = []; 

  cuadroNombre: string = "";
  cuadroNivel: number = 0;
  cuadroTipo: string = "";
  imagen: string = "";
  

  agregarPokemon(){
    let pokemon=new Pokemons(this.cuadroNombre, this.cuadroTipo, this.cuadroNivel, this.imagen);
    this.pokemons.push(pokemon);
    this.pokeService.mostrarMensaje("Pokemon name: " + pokemon.nombre);
  }

}
