import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableCellComponent } from './table-cell/table-cell.component';
import { TableColumnDirective } from './table-column/table-column.directive';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableColumnDirective,
    TableCellComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
