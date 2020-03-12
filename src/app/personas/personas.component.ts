import { Component, OnInit } from '@angular/core';
import { LogginService } from '../services/loggin-service.service';
import { PersonaService } from '../services/peronas.service';
import { Persona } from '../models/persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[]= [];
  
  constructor(
    private personaService: PersonaService,
    private router:Router
  ){

  }
  ngOnInit():void{

    this.personaService.obtenerPersonas()
    .subscribe(
      (personas: Persona[])=>{
        this.personas = personas;
        this.personaService.setPersonas(personas);
      }
    );

  }
  agregar(){
    this.router.navigate(['personas/agregar']);
  }
}
