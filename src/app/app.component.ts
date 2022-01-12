import { Component } from '@angular/core';
import { ApiPokemonsService } from './services/api-pokemons.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PokeLite';
  url = '/pokedex-api/pokemon';

  constructor(private pokemonApiSvc: ApiPokemonsService){
    this.pokemonApiSvc.getPokemons().subscribe(resp=>{
      console.log(resp);
    });
  }


}
