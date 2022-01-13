import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemons } from 'src/app/pokemons.model';
import { Router } from '@angular/router';
import { ApiPokemonsService } from 'src/app/services/api-pokemons.service';

@Component({
  selector: 'app-modificar-pokemon',
  templateUrl: './modificar-pokemon.component.html',
  styleUrls: ['./modificar-pokemon.component.css']
})
export class ModificarPokemonComponent implements OnInit {
  
  titulo = 'Pokédex';
  accion: number;
  btnState: string = '';
  
  cuadroNombre: string = "";
  cuadroNivel: number = 0;
  cuadroTipo: string = "";
  imagen: string;
  indice: number;
  

  constructor(
    private pokeService: ApiPokemonsService,
     private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.indice = Number(this.route.snapshot.params['id']);
    this.accion = this.route.snapshot.queryParams['accion'];
    let pokemon: Pokemons = this.pokeService.getPokemons(this.indice);
    this.cuadroNombre = pokemon.nombre;
    this.cuadroTipo = pokemon.tipo;
    this.cuadroNivel = pokemon.nivel;
    this.imagen = pokemon.img;

    if (this.accion == 1) {
      this.btnState = "Update";
    } else {
      this.btnState = "Delete";
    }
    
  }

  pokemonState(){

    if (this.accion == 1) {
      let pokemon = new Pokemons(this.cuadroNombre, this.cuadroTipo, this.cuadroNivel, this.imagen);
      this.pokeService.updatePokemon(pokemon, this.indice);
      this.router.navigate(['/pokedex']);
    }

    else{
      this.pokeService.deletePokemon(this.indice);
      this.router.navigate(['/pokedex']);
    }

  }


}
