import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona';
import { LogginService } from '../../services/loggin-service.service';
import { PersonaService } from '../../services/peronas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [LogginService]
})

export class FormularioComponent implements OnInit {

  nombreInput:string;
  apellidoInput:string;
  index:number;
  modoEdicion:number;

  constructor(
    private logginService:LogginService,
    private personaService: PersonaService,
    private router:Router,
    private route: ActivatedRoute
  ) {
    this.personaService.saludar.subscribe(
      (indice: number) =>{
        alert('el indice es: ' + indice);
      } 
    );
  }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion']; //+ convierte a tipo entero

    if(this.modoEdicion != null && this.modoEdicion === 1){
      let persona:Persona = this.personaService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  onGuardarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
   

    if(this.modoEdicion != null && this.modoEdicion === 1){
      this.personaService.modificarPersona(this.index,persona1);
    }else{
      this.personaService.agregarPersona(persona1);
    }
    this.router.navigate(['personas']);

  
  }

  eliminarPersona(){
    if(this.index != null){
      this.personaService.eliminarPersona(this.index);
    }
    this.router.navigate(['personas']);
  }

}
