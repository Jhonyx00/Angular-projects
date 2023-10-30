import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { ModalFilterComponent } from './components/list/modal-filter/modal-filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListComponent, ModalFilterComponent],
  imports: [CommonModule, FormsModule],
  exports: [ListComponent, ModalFilterComponent],
})
export class SharedModule {}
