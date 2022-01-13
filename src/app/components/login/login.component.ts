import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string = "";
  password: string = "";

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
      
  }

  logIn(){
    console.log(`User Name: ${this.userName}; User password: ${this.password}`);
    this.router.navigate(['/pokedex']);
  }

  logOut(){
    this.router.navigate(['']);
  }

}
