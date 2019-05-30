import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaComponent } from './Componentes/tabla/tabla.component';
import { FormularioComponent } from './Componentes/formulario/formulario.component';
import { Practica1Component } from './Componentes/practica1/practica1.component';
import { HeaderComponent } from './Componentes/header/header.component';
import {FormsModule}from '@angular/forms';
//Servicios
import {Practica1serviceService} from './Servicios/practica1service.service';
import { Persona } from './Modelos/Persona';
//--------------------------------------------------------------------------------
const routes: Routes = [
  { path: 'practica1', component: Practica1Component ,},

];

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    FormularioComponent,
    Practica1Component,
    HeaderComponent
  ],
  imports: [
    [ RouterModule.forRoot(routes) ],
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [Practica1serviceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
