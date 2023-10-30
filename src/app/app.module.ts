import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DataServiceService } from './services/data-service.service';
import { ListComponent } from './shared/components/list/list.component';
import { ModalFilterComponent } from './shared/components/list/modal-filter/modal-filter.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [ListComponent, ModalFilterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
