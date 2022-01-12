import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiPokemonsService {

  url = '/pokedex-api/pokemon';

  constructor(private http: HttpClient){
    console.log("servicio pokemon");
  }

  mostrarMensaje(mensaje:string){
    alert(mensaje);
  }

  getPokemons(){
    console.log("servicio pokemon");
    return this.http.get(this.url); 
  }
  
  postRequest(url: string, data = {}) {
    return this.http.post(url, data);
  }
  

}
