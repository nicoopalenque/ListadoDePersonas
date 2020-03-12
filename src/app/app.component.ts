import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit{

  title = 'Listado de Personas';
  
   constructor(
    private loginService:LoginService
   ){

   }
   ngOnInit():void{
    firebase.initializeApp({
      apiKey:'AIzaSyB6BU4bFXcSqxDoJqY1FoQEeMCfaxLTLKI',
      authDomain:'listado-personas-8a348.firebaseapp.com'
    });

   }

   isAutenticado(){
     return this.loginService.isAutenticado();
   }
   salir(){
    this.loginService.logout();
   }
  
}
