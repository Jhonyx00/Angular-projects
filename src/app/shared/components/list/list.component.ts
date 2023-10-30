import { Component } from '@angular/core';
import { filter } from 'rxjs';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  constructor(public dataservice: DataServiceService) {}

  get mostrarDatos() {
    return this.dataservice.getData();
  }

  get mostrarDatosConFiltro() {
    return this.dataservice.getFilteredData();
  }

  newData: any[] = [];
  //función para obtener la lista de mail
  getDataMailBox(filters: any) {
    console.log('Imprimir los filtros desde ListComponent', filters);

    if (filters.status && filters.prioridad) {
      this.newData = this.dataservice.getData().filter((data) => {
        return (
          data.prioridad === filters.prioridad && data.status === filters.status
        );
      });
    } else if (filters.status) {
      this.newData = this.dataservice.getData().filter((data) => {
        return data.status === filters.status;
      });
    } else if (filters.prioridad) {
      this.newData = this.dataservice.getData().filter((data) => {
        return data.prioridad === filters.prioridad;
      });
    } else {
      console.log('Array sin filtro: ', this.dataservice.getData());
    }

    this.dataservice.setFilteredData(this.newData);
    console.log('Array con filtro: ', this.newData);
  }
}
