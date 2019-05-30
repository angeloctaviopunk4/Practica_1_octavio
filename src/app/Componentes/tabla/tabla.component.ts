import { Component, OnInit } from '@angular/core';
import {Practica1serviceService} from '../../Servicios/practica1service.service';
import{Persona}from '../../Modelos/Persona';
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

 
  
 datos:Array<Persona>;
 //icono:String=" ";
 //public new:Persona;
  constructor( _Servicio:Practica1serviceService) {
  
     
    this.datos= new Array<Persona>();
   _Servicio.enviarpersona$.subscribe(Persona=>{
     this.datos.push(Persona);
      console.log(this.datos);
      
      //this.icono = this.iconos[this.iconorandom()].toString();
     
      //console.log(this.icono);
     
   });
   //this.icono = " ";
    //this.datos.push(this.pers);

   // this.datos = _Servicio.getArray();
   
    //console.log(this.datos);
   
  

   }

  ngOnInit() {
   
  }
 

}
