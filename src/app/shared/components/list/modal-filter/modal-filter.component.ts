import { Component, Inject } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { ListComponent } from 'src/app/shared/components/list/list.component';

@Component({
  selector: 'app-modal-filter',
  templateUrl: './modal-filter.component.html',
  styleUrls: ['./modal-filter.component.css'],
})
export class ModalFilterComponent {
  status: any;
  prioridad: any;

  obj = {};
  constructor(@Inject(ListComponent) private padre: ListComponent) {}

  getFilters() {
    this.obj = { status: this.status, prioridad: this.prioridad };

    //llamamos la funcion del padre

    this.padre.getDataMailBox(this.obj);
  }

  //aqui debo llamar una funcion que se encuentre en list.component para recibir el objeto

  filtrar() {
    //   this.dataservice.numFiltro = 1;
    //   this.obj = [{ status: this.status, prioridad: this.prioridad }];
    //   console.log(this.obj);
    //   // console.log('Status: ', this.status);
    //   // console.log('Prioridad: ', this.prioridad);
    //   // const filtroStatus = this.dataservice.getData().filter((dato) => {
    //   //   return dato.status === this.status;
    //   // });
    //   // console.log('Filtro status: ', filtroStatus);
    //   // const filtroPrioridad = this.dataservice.getData().filter((dato) => {
    //   //   return dato.prioridad === this.prioridad;
    //   // });
    //   // console.log('Filtro prioridad: ', filtroPrioridad);
    //   // //
    //   // const ambas = this.dataservice.getData().filter((dato) => {
    //   //   return dato.prioridad === this.prioridad || dato.status === this.status;
    //   // });
    // this.dataservice.setFilteredData(filtroStatus);
    // console.log(this.dataservice.setFilteredData(filtroStatus));
    // console.log('Filtered data', this.dataservice.filteredData);
  }
}
