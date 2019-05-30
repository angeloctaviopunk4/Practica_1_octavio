import { Component, OnInit } from '@angular/core';
import {Practica1serviceService} from '../../Servicios/practica1service.service';
import{Persona}from '../../Modelos/Persona';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  //personas:Persona[]=[];
 
  public persona:Persona;
  constructor(private _Servicio:Practica1serviceService) { 
    this.persona = new Persona( '','','','','','','');
  }
  ngOnInit() {
    
  }
  
  onSubmit(){
  
    this._Servicio.setPersona(this.persona)
    console.log(this.persona);
    this.persona = new Persona( ' ',' ',' ',' ', ' ',' ',' ');
 }



}
