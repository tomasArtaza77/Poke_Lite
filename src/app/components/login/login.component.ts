import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiPokemonsService } from 'src/app/services/api-pokemons.service';
import { URLS } from 'src/app/urls/urls.constants';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup = new FormGroup({
    user: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private router: Router,
    private pokemonApiSvc: ApiPokemonsService
  ) { }

  ngOnInit(): void {
      
  }

  

  logIn(){
    
    this.router.navigate(['/pokedex']);
  
    /*
    const loginData = this.loginForm.value;
    console.log('Data user: ', loginData);
    this.pokemonApiSvc.postRequest(URLS.login, loginData).subscribe(
      (response: any) => {
        console.log('login api response: ', response)
        if (response.Status === true) {
          console.log('login api response: ', response.data.token);
          localStorage.setItem('userName', this.loginForm.value.user);
          localStorage.setItem('authToken', response.data.token);
          this.router.navigate(['/pokemons']);
        } else {
          console.log("ERROR LOGIN");
        }
      }, (error: HttpErrorResponse) => {
        console.error(error)
      }
    );
    */
  }

  logOut(){
    this.router.navigate(['']);
  }

}
