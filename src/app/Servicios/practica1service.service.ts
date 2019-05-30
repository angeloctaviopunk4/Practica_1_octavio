import { Injectable } from '@angular/core';
import{Persona}from '../Modelos/Persona';
import { makeBindingParser, mergeNsAndName } from '@angular/compiler';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Practica1serviceService {

  constructor() { 


   }
  enviarpersona= new Subject<Persona>();
  enviarpersona$=this.enviarpersona.asObservable();

setPersona(nueva:Persona){
  this.enviarpersona.next(nueva)
}

   //arreglo:Array<Persona>;

   //setarray(personas:Persona[]){
     // this.arreglo = personas;
   //}
   //getArray(){
     
    // return this.enviararreglo.next(this.arreglo);
   //}


   



  
}
