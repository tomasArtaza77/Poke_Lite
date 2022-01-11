import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
    //pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'contacto',
    component: ContactoComponent
    
  },

  {
    path: 'pokemons',
    component: PokemonsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
