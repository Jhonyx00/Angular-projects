import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor() {}

  data = [
    { nombre: 'Nombre 1', status: '1', prioridad: 'baja' },
    { nombre: 'Nombre 2', status: '2', prioridad: 'alta' },
    { nombre: 'Nombre 3', status: '2', prioridad: 'alta' },
    { nombre: 'Nombre 4', status: '2', prioridad: 'media' },
    { nombre: 'Nombre 5', status: '1', prioridad: 'alta' },
    { nombre: 'Nombre 6', status: '3', prioridad: 'media' },
    { nombre: 'Nombre 7', status: '2', prioridad: 'alta' },
    { nombre: 'Nombre 8', status: '3', prioridad: 'media' },
    { nombre: 'Nombre 9', status: '2', prioridad: 'media' },
    { nombre: 'Nombre 10', status: '3', prioridad: 'baja' },
  ];

  filteredData = [{ nombre: '', status: '', prioridad: '' }];

  public getData() {
    return this.data;
  }

  public setFilteredData(filteredData: any[]) {
    this.filteredData = filteredData;
  }

  public getFilteredData() {
    return this.filteredData;
  }
}
