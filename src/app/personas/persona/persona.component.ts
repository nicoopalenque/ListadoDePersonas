import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../../models/persona';
import { PersonaService } from '../../services/peronas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input() persona: Persona;
  @Input() indice:number;

  constructor(
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {
  }

  emitirSaludo(){
      this.personaService.saludar.emit(this.indice);
  }
}
