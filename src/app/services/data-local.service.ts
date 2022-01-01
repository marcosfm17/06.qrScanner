import { Injectable } from '@angular/core';
import { Registro } from '../models/registro';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  guardados: Registro[] = [];
  constructor() { }
  guardarRegistro(format: string, text: string){
    const nuevo = new Registro(format, text);
    this.guardados.unshift(nuevo);
  }
}
