import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ModificarPokemonComponent } from './components/modificar-pokemon/modificar-pokemon.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'about',
    component: AboutComponent
    
  },

  {
    path: 'pokedex',
    component: PokedexComponent
  },

  {
    path: 'updatepokemon/:id',
    component: ModificarPokemonComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
