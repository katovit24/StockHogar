import { Injectable } from '@angular/core';
import { Estancia, Ubicacion } from '../clases';

@Injectable({
  providedIn: 'root'
})


export class GestionStockService {

  public misUbicaciones : Ubicacion[]=[];
  public misEstancias : Estancia[]= [];
  constructor() { }

  public createUbicacion(nombre : string){
    let nuevaUbicacion : Ubicacion = new Ubicacion
    nuevaUbicacion.nombreUbicacion=nombre
    this.misUbicaciones.push(nuevaUbicacion)
  }

  public createEstancia(nombre : string, ubicacion : Ubicacion){
    let nuevaEstancia : Estancia = new Estancia
    nuevaEstancia.nombreEstancia=nombre
    ubicacion.listaEstancias.push(nuevaEstancia)
  }
}
