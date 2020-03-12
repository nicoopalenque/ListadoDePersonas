import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogginService{

  constructor() { }

  enviaMensajeAConsola(mensaje:string){
    console.log(mensaje);

  }
}
