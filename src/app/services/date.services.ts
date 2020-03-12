import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';
import { LoginService } from '../login/login.service';

@Injectable()
export class DataServices{
    constructor(
        private httpClient: HttpClient,
        private loginService: LoginService
        ){

    }
    
    //Guardar Personas
    guardarPersonas(personas:Persona[]){
        const token = this.loginService.getIdToken();
        this.httpClient.put('https://listado-personas-8a348.firebaseio.com/datos.json?auth='+token,personas)
        .subscribe(
            response =>{
                console.log("Resultado de guardar Personas " + response);
            },
            error=>{
                console.log('Error al guardar Personas: ' + error);
            }
        )
        ;
    }

    cargarPersonas(){
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://listado-personas-8a348.firebaseio.com/datos.json?auth='+token);
    }

    modificarPersona(index:number, persona: Persona){
        const token = this.loginService.getIdToken();
        let url:string;
        url = 'https://listado-personas-8a348.firebaseio.com/datos/' + index+'.json?auth='+token;
        this.httpClient.put(url, persona)
        .subscribe(
            response=>{
                console.log('Resultado modificar Persona: '+response);
            },
            error=>{
                console.log('Error al modificar Persona: ' + error);
            }
        );
    }

    eliminarPersona(index: number){
        const token = this.loginService.getIdToken();
        let url:string;
        url = 'https://listado-personas-8a348.firebaseio.com/datos/' + index+'.json?auth='+token;
        this.httpClient.delete(url)
        .subscribe(
            response=>{
                console.log('Resultado eliminar Persona: '+response);
            },
            error=>{
                console.log('Error al eliminar Persona: ' + error);
            }
        );
    }
}